const router = require("express").Router();
const { UserController } = require("../../controllers");

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
