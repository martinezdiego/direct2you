const metodoDePagoEmpresa = require('../controllers/metodoDePagoEmpresa');

const router = require('express').Router();

router.post("/crear", metodoDePagoEmpresa.create);

router.get("/", metodoDePagoEmpresa.findAll);

router.get("/:id", metodoDePagoEmpresa.findAllOfCompany);

router.delete("/:id", metodoDePagoEmpresa.deleteAllOfCompany);

router.delete("/:companyId/:paymentMethodId", metodoDePagoEmpresa.deleteOneOfCompany);

router.delete("/", metodoDePagoEmpresa.deleteAll);

module.exports = router;
