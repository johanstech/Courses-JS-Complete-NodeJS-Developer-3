const { User } = require("../models");

// @desc Get all users
// @route GET /api/users/
// @access Public
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    if (!users) {
      return res.status(500).send();
    }
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Get user
// @route GET /api/users/:id
// @access Public
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Create new user
// @route POST /api/users
// @access Public
const createUser = async (req, res) => {
  const { name, age, email, password } = req.body;
  if (!name || !age || !email || !password) {
    res.status(400);
    throw new Error("Provide data for all fields.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  try {
    const user = await User.create({
      name,
      age,
      email,
      password,
    });
    if (!user) {
      res.status(400);
      throw new Error("Invalid user data.");
    }
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Update user
// @route PATCH /api/users/:id
// @access Public
const updateUser = async (req, res) => {
  const allowedUpdates = ["name", "email", "password", "age"];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid field(s)!" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
};

// @desc Delete user
// @route DELETE /api/users/:id
// @access Public
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};

const UserController = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

module.exports = UserController;
