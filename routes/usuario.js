const usuario = require('../controllers/usuario');

const router = require('express').Router();

router.post("/crear", usuario.create);

router.get("/todos", usuario.findAll);

router.get("/:id", usuario.findOne);

router.put("/:id", usuario.update);

router.put("/:id/eliminar", usuario.delete);

router.delete("/todos/eliminar", usuario.deleteAll);

module.exports = router;
