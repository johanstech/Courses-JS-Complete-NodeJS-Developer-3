const router = require("express").Router();
const { UserController } = require("../../controllers");

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.post("/", UserController.createUser);

module.exports = router;
