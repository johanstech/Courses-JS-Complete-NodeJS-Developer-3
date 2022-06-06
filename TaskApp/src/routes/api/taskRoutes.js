const router = require("express").Router();
const { TaskController } = require("../../controllers");

router.get("/", TaskController.getTasks);
router.post("/", TaskController.createTask);
router.get("/:id", TaskController.getTask);
router.patch("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
