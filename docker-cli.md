```bash
# ******************** 🛑 SERVICE APP *************************
#    ********* ⚠️ ÉTAPE 1: section build  ***************
# build:
#   context: .
#   dockerfile: Dockerfile
# image: express-starter:latest
docker build -t express-starter:latest -f Dockerfile .

#    ********* ⚠️ ÉTAPE 2: lancer le container  ***************
# container_name: express-starter-app...
docker run -d \
  --name express-starter-app \
  -e NODE_ENV=production \
  -p 3000:3000 \
  -v $(pwd):/usr/src/app \
  express-starter:latest

# ******************** 🛑 SERVICE postgres *************************
# ⚠️ Pour lancer un container PostgreSQL
docker run -d \
  --name postgres-db \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=mydatabase \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:latest

```