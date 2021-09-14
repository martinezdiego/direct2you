const pedido = require('../controllers/pedido');

const router = require('express').Router();

router.post("/crear", pedido.create);

router.get("/", pedido.findAll);

router.get("/:id", pedido.findOne);

router.put("/:id", pedido.update);

router.delete("/:id", pedido.delete);

router.delete("/", pedido.deleteAll);

module.exports = router;