//Récupération des données "static via un fichier json"
const characters = require('../data/characters.json');

//Définition du controller pour "tous -> getAll" les personnages
const CharacterController = {

    getAll: (req, res) => {
      //Préparation des données à envoyer
        const data = characters.map(perso => ({
            id: perso.id, 
            firstname: perso.firstname,
            lastname: perso.lastname
        }));
          //Envoi les données "Character" sous forme de JSON
          //res.send(JSON.stringify(data))
          res.json(data)
    },

    getById: (req, res) => {
        //Récupération de l'id contenu dans l'url
        const id = parseInt(req.params.id);
        console.log('ID =>', id, typeof(id));

        //obtenir le personnage à envoyer
        const character = characters.find(c => c.id === id);
         console.log('- PERSO =>', character);

         //Envoi d'une erreur 404 si le personnage n'existe pas!
            if (!character){
            res.sendStatus(404);
            return;
            }
        //Envoi les données
        res.json(character)
    },

    add: (req, res)=> {
        console.log();

        //"Best practice" -> ajouter une étape de validation de donnée
        console.log(('Donnée recu : ', req.body));

        res.sendStatus(501);

    },

    update: (req, res) => {

        res.sendStatus(501);
    },

    delete: (req, res) => {
        const id =  parseInt(req.params.id);

        //Obtenir l'index de l'élément à supprimer
        const targetIndex = characters.findIndex(c => c.id === id);
        
        //Si l'élément n'existe pas => Erreur 404
        if (targetIndex === -1){   // convention, si la valeur n'existe pas on retourne -1. voir la doc officiel
            res.sendStatus(404);
            return;
        }
        //suppression de l'élément ciclé
        characters.splice(targetIndex, 1);

        //Envoi d'une réponse "no content"     
        res.sendStatus(204);
    }

};

module.exports = CharacterController;
