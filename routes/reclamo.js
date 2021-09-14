const reclamo = require('../controllers/reclamo');

const router = require('express').Router();

router.post("/crear", reclamo.create);

router.get("/", reclamo.findAll);

router.get("/:id", reclamo.findOne);

router.put("/:id", reclamo.update);

router.delete("/:id", reclamo.delete);

router.delete("/", reclamo.deleteAll);

module.exports = router;