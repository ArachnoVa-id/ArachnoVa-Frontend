#!/bin/bash
set -e

REPO_DIR="/var/www/neo.arachnova.id"
DOMAIN="neo.arachnova.id"

echo "=== Updating code ==="
cd $REPO_DIR
git pull origin main

echo "=== Installing dependencies ==="
npm install

echo "=== Building ==="
npm run build

echo "=== Setting up SSL ==="
sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email arach nova.id@gmail.com || true

echo "=== Configuring Nginx ==="
sudo cp $REPO_DIR/deploy/neo.arachnova.id.nginx /etc/nginx/sites-available/$DOMAIN
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "=== Deployment complete! ==="
echo "https://$DOMAIN"
