const { Router } = require("express");
const modelController = require("../database/controllers/model.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", authValidate, modelController.findAll);
router.post("/insert", authValidate, modelController.insert);
router.put("/update/:id", authValidate, modelController.update);
router.delete("/delete/:id", authValidate, modelController.exclude);

module.exports = router;
