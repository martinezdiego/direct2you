const usuarioOpcion = require('../controllers/usuarioOpcion');

const router = require('express').Router();

router.post("/crear", usuarioOpcion.create);

router.get("/", usuarioOpcion.findAll);

router.get("/:id", usuarioOpcion.findAllOfUser);

router.delete("/:id", usuarioOpcion.deleteAllOfUser);

router.delete("/:userId/:optionId", usuarioOpcion.deleteOneOfUser);

router.delete("/", usuarioOpcion.deleteAll);

module.exports = router;
