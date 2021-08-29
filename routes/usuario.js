const usuario = require('../controllers/usuario');

const router = require('express').Router();

router.post("/ingresar", usuario.login);

router.get("/salir", usuario.logout);

router.post("/crear", usuario.create);

router.get("/", usuario.findAll);

router.get("/:id", usuario.findOne);

router.put("/:id", usuario.update);

router.delete("/:id", usuario.delete);

router.delete("/", usuario.deleteAll);
         
module.exports = router;
