const { Router } = require("express");
const productsController = require("../database/controllers/products.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", authValidate, productsController.findAll);
router.get("/:brand", authValidate, productsController.findByBrand);
router.post("/insert", authValidate, productsController.insert);
router.put("/update/:id", authValidate, productsController.update);
router.delete("/delete/:id", authValidate, productsController.exclude);

module.exports = router;
