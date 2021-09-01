const medioTransporte = require('../controllers/medioTransporte');

const router = require('express').Router();

router.post("/crear", medioTransporte.create);

router.get("/", medioTransporte.findAll);

router.put("/:id", medioTransporte.update);

router.delete("/:id", medioTransporte.delete);

router.delete("/", medioTransporte.deleteAll);

module.exports = router;