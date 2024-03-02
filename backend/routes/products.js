const { Router } = require("express");
const productsController = require("../database/controllers/products.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", productsController.findAll);
router.get("/:brand", productsController.findByBrand);
router.post("/insert", productsController.insert);
router.put("/update/:id", productsController.update);
router.delete("/delete/:id", productsController.exclude);

module.exports = router;
