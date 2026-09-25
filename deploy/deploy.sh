#!/bin/bash
set -e

REPO_DIR="/var/www/arachnova.id"
DOMAIN="arachnova.id"

echo "=== Updating code ==="
cd $REPO_DIR
git pull origin main

# Server-only secrets. Never expose these as VITE_* vars: those are compiled into the public JS bundle.
CMS_API_KEY="${CMS_API_KEY:-$(grep '^CMS_API_KEY=' .env 2>/dev/null | cut -d= -f2)}"
CMS_API_KEY="${CMS_API_KEY:-$(openssl rand -hex 32)}"
# Admin login is "Sign in with Google": OAuth client ID + allowlisted emails (comma-separated).
GOOGLE_CLIENT_ID="${GOOGLE_CLIENT_ID:-$(grep '^GOOGLE_CLIENT_ID=' .env 2>/dev/null | cut -d= -f2)}"
CMS_ADMIN_EMAILS="${CMS_ADMIN_EMAILS:-$(grep '^CMS_ADMIN_EMAILS=' .env 2>/dev/null | cut -d= -f2)}"
if [ -z "$GOOGLE_CLIENT_ID" ] || [ -z "$CMS_ADMIN_EMAILS" ]; then
  echo "Set GOOGLE_CLIENT_ID and CMS_ADMIN_EMAILS (env or $REPO_DIR/.env) before deploying" >&2
  exit 1
fi

umask 077
printf 'CMS_API_KEY=%s\nGOOGLE_CLIENT_ID=%s\nCMS_ADMIN_EMAILS=%s\n' \
  "$CMS_API_KEY" "$GOOGLE_CLIENT_ID" "$CMS_ADMIN_EMAILS" > $REPO_DIR/.env
chmod 600 $REPO_DIR/.env
umask 022

echo "=== Installing dependencies ==="
npm install

echo "=== Building frontend ==="
npm run build

echo "=== Setting up SSL ==="
sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email arachnova.id@gmail.com || true

echo "=== Configuring Nginx ==="
sudo cp $REPO_DIR/deploy/arachnova.id.nginx /etc/nginx/sites-available/$DOMAIN
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "=== Setting up CMS server service ==="
sudo tee /etc/systemd/system/arachnova-cms.service > /dev/null <<SYSTEMD
[Unit]
Description=ArachnoVa CMS API Server
After=network.target

[Service]
Type=simple
User=adminlpbuilder
WorkingDirectory=$REPO_DIR
ExecStart=/usr/bin/node server/index.js
Restart=always
RestartSec=5
Environment=PORT=3006
Environment=NODE_ENV=production
EnvironmentFile=$REPO_DIR/.env

[Install]
WantedBy=multi-user.target
SYSTEMD

sudo systemctl daemon-reload
sudo systemctl enable arachnova-cms
sudo systemctl restart arachnova-cms

echo "=== Deployment complete! ==="
echo "Site: https://$DOMAIN"
echo "Admin: https://$DOMAIN/admin"
echo "Admin login: Google accounts in CMS_ADMIN_EMAILS ($REPO_DIR/.env)"
