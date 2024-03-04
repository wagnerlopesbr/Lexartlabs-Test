const { Router } = require("express");
const modelController = require("../database/controllers/model.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", modelController.findAll);
router.post("/insert", modelController.insert);
router.put("/update/:id", modelController.update);
router.delete("/delete/:id", modelController.exclude);

module.exports = router;
