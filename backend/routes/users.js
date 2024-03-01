const { Router } = require("express");
const usersController = require("../database/controllers/users.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", authValidate, usersController.findAll);
router.get("/:id", authValidate, usersController.findById);
router.post("/insert", authValidate, usersController.insert);
router.put("/update", authValidate, usersController.update);

module.exports = router;
