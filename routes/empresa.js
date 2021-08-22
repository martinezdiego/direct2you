const empresa = require('../controllers/empresa');

const router = require('express').Router();

router.post("/crear", empresa.create);

router.get("/", empresa.findAll);

router.get("/:id", empresa.findOne);

router.put("/:id", empresa.update);

router.delete("/:id", empresa.delete);

router.delete("/", empresa.deleteAll);

module.exports = router;
