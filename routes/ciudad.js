const ciudad = require('../controllers/ciudad');

const router = require('express').Router();

router.post("/crear", ciudad.create);

router.get("/", ciudad.findAll);

router.get("/:id", ciudad.findOne);

router.put("/:id", ciudad.update);

router.delete("/:id", ciudad.delete);

router.delete("/", ciudad.deleteAll);
         
module.exports = router;
