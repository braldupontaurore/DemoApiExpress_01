const CharacterController = require('../controllers/character.controller');

//Cette route va afficher tous les personnages
const characterRouter = require ('express').Router();

//characterRouter.get('/', CharacterController.getAll);
//.get('/:id([0-9]+)', CharacterController.getById);
//characterRouter.post('/', CharacterController.add);
//characterRouter.put('/:id([0-9]+)', CharacterController.delete),


//Routing avec préfixe
characterRouter.route('/')
    .get(CharacterController.getAll)
    .get(CharacterController.add);

characterRouter.route('/:id([0-9]+)')
    .get(CharacterController.getById)
    .put(CharacterController.update)
    .delete(CharacterController. delete);

module.exports = characterRouter;
