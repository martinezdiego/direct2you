const ubicacionUsuario = require('../controllers/ubicacionUsuario');

const router = require('express').Router();

router.post("/crear", ubicacionUsuario.create);

router.get("/", ubicacionUsuario.findAll);

router.get("/:id", ubicacionUsuario.findAllOfUser);

router.delete("/:id", ubicacionUsuario.deleteAllOfUser);

router.delete("/:userId/:ubicationId", ubicacionUsuario.deleteOneOfUser);

router.delete("/", ubicacionUsuario.deleteAll);

module.exports = router;
