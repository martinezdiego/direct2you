const pago = require('../controllers/pago');

const router = require('express').Router();

router.post("/crear", pago.create);

router.get("/", pago.findAll);

router.get("/:id", pago.findOne);

router.put("/:id", pago.update);

router.delete("/:id", pago.delete);

router.delete("/", pago.deleteAll);

module.exports = router;