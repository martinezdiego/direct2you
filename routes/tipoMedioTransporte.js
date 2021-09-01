const tipoMedioTransporte = require('../controllers/tipoMedioTransporte');

const router = require('express').Router();

router.post("/crear", tipoMedioTransporte.create);

router.get("/", tipoMedioTransporte.findAll);

router.get("/:id", tipoMedioTransporte.findOne);

router.put("/:id", tipoMedioTransporte.update);

router.delete("/:id", tipoMedioTransporte.delete);

router.delete("/", tipoMedioTransporte.deleteAll);

module.exports = router;