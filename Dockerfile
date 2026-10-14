# Utilise l'image officielle Nginx (alpine = légère)
FROM nginx:alpine

# Copie les fichiers du portfolio dans le dossier servi par Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Documentation du port exposé
EXPOSE 80

# Commande par défaut de Nginx (déjà définie dans l'image de base)
CMD ["nginx", "-g", "daemon off;"]
