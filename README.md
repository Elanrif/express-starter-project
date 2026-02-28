# Initialiser un projet Node.js avec npm

Ce guide explique comment initialiser un projet Node.js et configurer npm pour gérer les dépendances.

## Étapes

1. **Créer un répertoire de projet**
   - Assurez-vous que vous avez un répertoire pour votre projet. Par exemple : `setup-nodejs-starter-project`.

2. **Initialiser un projet npm**
   - ℹ️ npm init -y, permet de générer automatiquement un fichier package.json avec les valeurs par défaut,
     sans poser des questions interactives.

     ```bash
     npm init -y # ⚠️ -y est optionnel
     ```

   - Cela crée un fichier `package.json` qui contient les informations de base sur votre projet.

3. **Créer un fichier `.gitignore`**
   - Ajoutez un fichier `.gitignore` pour exclure les fichiers ou dossiers que vous ne souhaitez pas suivre. Par exemple :
     ```
     node_modules/
     .env
     ```

4. **Installer des dépendances (optionnel)**
   - Installez les dépendances nécessaires pour votre projet. Par exemple :
     ```bash
     npm install express
     ```

5. **Exécuter le projet (optionnel)**
   - Ajoutez un script dans le fichier `package.json` pour exécuter votre projet. Par exemple :
     ```json
     "scripts": {
       "start": "node index.js"
     }
     ```
   - Exécutez le script avec la commande :
     ```bash
     npm start
     ```

## ℹ️Ressources supplémentaires

- [Démarrez votre serveur Node.js avec ExpressJs - OpenClassrooms](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466277-creez-une-application-express)
