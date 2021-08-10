const tipoUsuario = require('../controllers/tipoUsuario');

const router = require('express').Router();

router.post("/", tipoUsuario.create);

router.get("/", tipoUsuario.findAll);

router.get("/:id", tipoUsuario.findOne);

module.exports = router;