const { Router } = require("express");
const brandController = require("../database/controllers/brand.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", authValidate, brandController.findAll);
router.post("/insert", authValidate, brandController.insert);
router.put("/update/:id", authValidate, brandController.update);
router.delete("/delete/:id", authValidate, brandController.exclude);

module.exports = router;
