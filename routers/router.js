//
const charachterRouter = require('./character.router');

const router = require ('express').Router();

router.use('/character', charachterRouter);

module.exports = router;