const { Router } = require("express");
const brandController = require("../database/controllers/brand.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", brandController.findAll);
router.post("/insert", brandController.insert);
router.put("/update/:id", brandController.update);
router.delete("/delete/:id", brandController.exclude);

module.exports = router;
