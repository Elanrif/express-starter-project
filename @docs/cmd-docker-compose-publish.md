```bash
# --- AVEC DOCKER COMPOSE ---

# ℹ️ Docker-compose nécessite un fichier docker compose.yml pour fonctionner
# ⚠️ <service-name> si non fourni, exécute tous les services définis dans le fichier docker compose.yml
# ℹ️ Docker-compose exécute les services définis dans le fichier docker-compose.yml
docker-compose up -d <service-name>
docker compose ps     # Lister les services en cours d'exécution

# --- Construire les images ---
docker compose build <service-name>

docker compose push <service-name>  # Pousser les images définies avec un nom
docker compose pull <service-name>  # Récupérer les nouvelles versions
docker-compose logs -f              # Voir les logs en temps réel
# Entrer dans le conteneur du service <service-name>
docker-compose exec <service-name> sh

# --- 🛑 Arrêter ou redémarrer les services ---
docker-compose stop <service-name>
docker compose stop <service-name>
docker compose restart

# --- ❌ Supprimer les services et les réseaux ---
docker compose down            # Tout arrêter et supprimer les réseaux
docker compose down -v         # Supprimer aussi les volumes (attention aux données !)

# --- 🌐 PUBLIER UNE IMAGE AVEC TAG ---
# ℹ️ <username> doit être remplacé par votre nom d'utilisateur Docker Hub
docker login                                     # Se connecter au Docker Hub
docker build -t <image-name>:<tag> .             # Build(créer) avec un tag
docker push <username>/<image-name>:<tag>        # Envoyer vers le registre
docker pull <username>/<image-name>:<tag>        # Récupérer une version précise
```