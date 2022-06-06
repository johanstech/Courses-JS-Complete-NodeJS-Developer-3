const router = require("express").Router();
const { TaskController } = require("../../controllers");

router.get("/", TaskController.getTasks);
router.get("/:id", TaskController.getTask);
router.post("/", TaskController.createTask);

module.exports = router;
