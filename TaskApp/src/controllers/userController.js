const { User } = require("../models");

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
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Provide email and password!");
  }

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

// @desc Logout user
// @route POST /api/users/logout
// @access Private
const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Logout user from all sessions
// @route POST /api/users/logoutall
// @access Private
const logoutUserAllSessions = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

// @desc Get user
// @route GET /api/users/me
// @access Private
const getUser = async (req, res) => {
  res.send(req.user);
};

// @desc Update user
// @route PATCH /api/users/me
// @access Private
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
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send();
  }
};

// @desc Delete user
// @route DELETE /api/users/me
// @access Private
const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const UserController = {
  createUser,
  loginUser,
  logoutUser,
  logoutUserAllSessions,
  getUser,
  updateUser,
  deleteUser,
};

module.exports = UserController;
