const producto = require('../controllers/producto');

const router = require('express').Router();

router.post("/crear", producto.create);

router.get("/", producto.findAll);

router.get("/:id", producto.findOne);

router.put("/:id", producto.update);

router.delete("/:id", producto.delete);

router.delete("/", producto.deleteAll);

module.exports = router;