// Importer le module HTTP intégré de Node.js
const http = require("http");

// Importer le module Express
const app = require("./app");
const PORT = process.env.PORT || 3000;
app.set("port", PORT);

const server = http.createServer(app);

// Démarrer le serveur avec l'application Express
server.listen(PORT, () => {
  console.log(
    `Serveur Express en cours d'exécution sur http://localhost:${PORT}`,
  );
});
