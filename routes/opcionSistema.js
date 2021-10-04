const opcionSistema = require('../controllers/opcionSistema');

const router = require('express').Router();

router.post("/crear", opcionSistema.create);

router.get("/", opcionSistema.findAll);

router.get("/:id", opcionSistema.findOne);

router.put("/:id", opcionSistema.update);

router.delete("/:id", opcionSistema.delete);

router.delete("/", opcionSistema.deleteAll);

module.exports = router;