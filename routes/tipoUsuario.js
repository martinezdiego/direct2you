const tipoUsuario = require('../controllers/tipoUsuario');

const router = require('express').Router();

router.post("/crear", tipoUsuario.create);

router.get("/", tipoUsuario.findAll);

router.get("/:id", tipoUsuario.findOne);

router.put("/:id", tipoUsuario.update);

router.delete("/:id", tipoUsuario.delete);

router.delete("/", tipoUsuario.deleteAll);

module.exports = router;
