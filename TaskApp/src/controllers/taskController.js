const { Task } = require("../models");

// @desc Create new task
// @route POST /api/tasks
// @access Public
const createTask = async (req, res) => {
  const { description, completed } = req.body;
  if (!description) {
    res.status(400);
    throw new Error("Provide description.");
  }

  try {
    const task = await Task.create({
      userId: req.user._id,
      description,
      completed,
    });
    if (!task) {
      return res.status(400).send();
    }
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Get all tasks
// @route GET /api/tasks/
// @access Public
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.send(tasks);
    // await req.user.populate("tasks").execPopulate();
    // res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Get task
// @route GET /api/tasks/:id
// @access Public
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Update task
// @route PATCH /api/tasks/:id
// @access Public
const updateTask = async (req, res) => {
  const allowedUpdates = ["description", "completed"];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid field(s)!" });
  }

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send();
  }
};

// @desc Delete task
// @route DELETE /api/tasks/:id
// @access Public
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
};

const TaskController = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};

module.exports = TaskController;
