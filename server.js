'use strict';

//Chargement des variables d'environnement
require('dotenv').config();

//Récupération des données d'environnement.
const {PORT} = process.env;

//Création du server "Web API"
const express=require('express');
const app = express();

//Démarrage du server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
