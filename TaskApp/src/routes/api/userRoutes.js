const router = require("express").Router();
const { authMiddleware } = require("../../middleware");
const { UserController } = require("../../controllers");

router.post("/", UserController.createUser);
router.post("/login", UserController.loginUser);
router.post("/logout", authMiddleware, UserController.logoutUser);
router.post("/logoutall", authMiddleware, UserController.logoutUserAllSessions);
router.get("/me", authMiddleware, UserController.getUser);
router.patch("/me", authMiddleware, UserController.updateUser);
router.delete("/me", authMiddleware, UserController.deleteUser);

module.exports = router;
