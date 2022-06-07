const router = require("express").Router();
const { authMiddleware } = require("../../middleware");
const { TaskController } = require("../../controllers");

router.get("/", authMiddleware, TaskController.getTasks);
router.post("/", authMiddleware, TaskController.createTask);
router.get("/:id", authMiddleware, TaskController.getTask);
router.patch("/:id", authMiddleware, TaskController.updateTask);
router.delete("/:id", authMiddleware, TaskController.deleteTask);

module.exports = router;
