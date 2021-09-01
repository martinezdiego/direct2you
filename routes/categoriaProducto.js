const categoriaProducto = require('../controllers/categoriaProducto');

const router = require('express').Router();

router.post("/crear", categoriaProducto.create);

router.get("/", categoriaProducto.findAll);

router.get("/:id", categoriaProducto.findOne);

router.put("/:id", categoriaProducto.update);

router.delete("/:id", categoriaProducto.delete);

router.delete("/", categoriaProducto.deleteAll);

module.exports = router;
