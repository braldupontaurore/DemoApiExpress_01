'use strict';

//Chargement des variables d'environnement
require('dotenv').config();

//Récupération des données d'environnement.
const {PORT} = process.env;

//Création du server "Web API"
const express=require('express');
const app = express();

//Utilisation du middleware "Morgan"
const morgan = require('morgan');
app.use(morgan('tiny'));

//Utilisation du router
const router = require('./routers/router');
app.use('/api', router);

//Démarrage du server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
