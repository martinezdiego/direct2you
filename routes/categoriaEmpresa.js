const categoriaEmpresa = require('../controllers/categoriaEmpresa');

const router = require('express').Router();

router.post("/crear", categoriaEmpresa.create);

router.get("/", categoriaEmpresa.findAll);

router.get("/:id", categoriaEmpresa.findOne);

router.put("/:id", categoriaEmpresa.update);

router.delete("/:id", categoriaEmpresa.delete);

router.delete("/", categoriaEmpresa.deleteAll);

module.exports = router;
