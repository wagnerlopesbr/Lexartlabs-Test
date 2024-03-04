const { Router } = require("express");
const usersController = require("../database/controllers/users.controller");
const { authValidate } = require("../middlewares/index");
const router = Router();

router.get("/", usersController.findAll);
router.get("/:id", usersController.findById);
router.post("/insert", usersController.insert);
router.put("/update/:id", usersController.update);

module.exports = router;
