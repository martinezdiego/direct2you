const productoPedido = require('../controllers/productoPedido');

const router = require('express').Router();

router.post("/crear", productoPedido.create);

router.get("/", productoPedido.findAll);

router.get("/:id", productoPedido.findAllOfOrder);

router.delete("/:id", productoPedido.deleteAllOfOrder);

router.delete("/:orderId/:productId", productoPedido.deleteOneOfOrder);

router.delete("/", productoPedido.deleteAll);

module.exports = router;
