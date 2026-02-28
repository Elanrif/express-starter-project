````bash 
# --- SECTION 1 : Les essentiels ---
# ⚠️ <container-name> est optionnel, sera généré automatiquement si non spécifié
# ⚠️ :tag est optionnel, prendra "latest" par défaut

# --- ℹ️ Construire une image à partir d'un Dockerfile ---
# - "-t <image-name>" : donne un nom (et éventuellement un tag) à l'image.
# - "." : Spécifie le contexte de construction, ici le répertoire courant.
# - . est important car il indique où se trouve le Dockerfile et les fichiers nécessaires à la construction de l'image.
docker build -t <image-name>:<tag> .
docker build -t <image-name>:<tag> -f /chemin/vers/Dockerfile .  # Spécifier un Dockerfile personnalisé

# --- ℹ️ Lancer un conteneur à partir d'une image déjà construite ---
docker run -p 3002:3000 --name <container-name> <image-name:tag>  # Lancer avec un port exposé
docker run -d --name <container-name> <image-name:tag>  # -d Créer et lancer en arrière-plan
docker run -it --name <container-name> <image-name:tag>      # Lancer en mode interactif

# --- ❌ Gérer les conteneurs et les images ---
docker images | grep "<image-name:tag>" # Lister les images 
docker ps                       # Lister les conteneurs en cours d'exécution
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Ports}}" # Avec format
docker ps -a                    # Lister tous les conteneurs
docker stop <container-name>    # Arrêter un conteneur
docker rm <container-name>      # Supprimer un conteneur
docker rmi <image-id>           # Supprimer une image

# --- ⚠️ SECTION 2 : Debug et Administration ---
docker logs -f <container-name>     # Voir les logs en temps réel
docker exec -it <container-name> sh # Entrer dans le conteneur
docker inspect <container-name>     # Voir les détails (IP, volumes)
docker system prune -a              # Nettoyage complet (attention !)
```