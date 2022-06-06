const { Task } = require("../models");

// @desc Get all tasks
// @route GET /api/tasks/
// @access Public
const getTasks = async (req, res) => {
  Task.find()
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send();
    });
};

// @desc Get task
// @route GET /api/tasks/:id
// @access Public
const getTask = async (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send();
    });
};

// @desc Create new task
// @route POST /api/tasks
// @access Public
const createTask = (req, res) => {
  const { description, completed } = req.body;
  if (!description || !completed) {
    res.status(400);
    throw new Error("Provide data for all fields.");
  }

  Task.create({
    description,
    completed,
  })
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send();
    });
};

const TaskController = { getTasks, getTask, createTask };

module.exports = TaskController;
