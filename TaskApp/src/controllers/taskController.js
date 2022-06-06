const { Task } = require("../models");

// @desc Get all tasks
// @route GET /api/tasks/
// @access Public
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      return res.status(500).send();
    }
    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Get task
// @route GET /api/tasks/:id
// @access Public
const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Create new task
// @route POST /api/tasks
// @access Public
const createTask = async (req, res) => {
  const { description, completed } = req.body;
  if (!description || !completed) {
    res.status(400);
    throw new Error("Provide data for all fields.");
  }

  try {
    const task = await Task.create({
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
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
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
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
};

const TaskController = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};

module.exports = TaskController;
