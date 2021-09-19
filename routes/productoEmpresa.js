const productoEmpresa = require('../controllers/productoEmpresa');

const router = require('express').Router();

router.post("/crear", productoEmpresa.create);

router.get("/", productoEmpresa.findAll);

router.get("/:id", productoEmpresa.findAllOfCompany);

router.delete("/:id", productoEmpresa.deleteAllOfCompany);

router.delete("/:companyId/:productId", productoEmpresa.deleteOneOfCompany);

router.delete("/", productoEmpresa.deleteAll);

module.exports = router;
