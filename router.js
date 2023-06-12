const express = require("express");
const router = express.Router();
const path = require('path');
const clientPath = path.resolve(__dirname, 'client');


router.get("/", (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// Définition de la route vers le dossier statique
router.use(express.static(clientPath));

module.exports = router;

