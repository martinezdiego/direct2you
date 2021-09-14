const metodoPago = require('../controllers/metodoPago');

const router = require('express').Router();

router.post("/crear", metodoPago.create);

router.get("/", metodoPago.findAll);

router.put("/:id", metodoPago.update);

router.delete("/:id", metodoPago.delete);

router.delete("/", metodoPago.deleteAll);

module.exports = router;