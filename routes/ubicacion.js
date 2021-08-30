const ubicacion = require('../controllers/ubicacion');

const router = require('express').Router();

router.post("/crear", ubicacion.create);

router.get("/", ubicacion.findAll);

router.get("/:id", ubicacion.findOne);

router.put("/:id", ubicacion.update);

router.delete("/:id", ubicacion.delete);

router.delete("/", ubicacion.deleteAll);
         
module.exports = router;
