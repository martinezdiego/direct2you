const zonaResidencial = require('../controllers/zonaResidencial');

const router = require('express').Router();

router.post("/crear", zonaResidencial.create);

router.get("/", zonaResidencial.findAll);

router.get("/:id", zonaResidencial.findOne);

router.put("/:id", zonaResidencial.update);

router.delete("/:id", zonaResidencial.delete);

router.delete("/", zonaResidencial.deleteAll);
         
module.exports = router;
