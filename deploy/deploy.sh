#!/bin/bash
set -e

REPO_DIR="/var/www/neo.arachnova.id"
DOMAIN="neo.arachnova.id"

echo "=== Updating code ==="
cd $REPO_DIR
git pull origin main

CMS_API_KEY="${CMS_API_KEY:-$(cat .env 2>/dev/null | grep '^CMS_API_KEY=' | cut -d= -f2)}"
CMS_API_KEY="${CMS_API_KEY:-$(openssl rand -hex 16)}"

echo "CMS_API_KEY=$CMS_API_KEY" > $REPO_DIR/.env
echo "VITE_CMS_API_KEY=$CMS_API_KEY" >> $REPO_DIR/.env

export VITE_CMS_API_KEY=$CMS_API_KEY

echo "=== Installing dependencies ==="
npm install

echo "=== Building frontend ==="
npm run build

echo "=== Setting up SSL ==="
sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email arachnova.id@gmail.com || true

echo "=== Configuring Nginx ==="
sudo cp $REPO_DIR/deploy/neo.arachnova.id.nginx /etc/nginx/sites-available/$DOMAIN
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
Environment=CMS_API_KEY=$CMS_API_KEY

[Install]
WantedBy=multi-user.target
SYSTEMD

sudo systemctl daemon-reload
sudo systemctl enable arachnova-cms
sudo systemctl restart arachnova-cms

echo "=== Deployment complete! ==="
echo "Site: https://$DOMAIN"
echo "Admin: https://$DOMAIN/admin"
echo "Password: arachnova2024"
echo "API Key: $CMS_API_KEY"
