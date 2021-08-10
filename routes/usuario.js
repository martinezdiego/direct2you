const usuario = require('../controllers/usuario');

const router = require('express').Router();

router.post("/", usuario.create);

router.get("/", usuario.findAll);

module.exports = router;