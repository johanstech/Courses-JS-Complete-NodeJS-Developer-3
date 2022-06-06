const { User } = require("../models");

// @desc Get all users
// @route GET /api/users/
// @access Public
const getUsers = async (req, res) => {
  User.find()
    .select("-password")
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
};

// @desc Get user
// @route GET /api/users/:id
// @access Public
const getUser = async (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .select("-password")
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => {
      res.status(500).send();
    });
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

  const user = await User.create({
    name,
    age,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
};

const UserController = { getUsers, getUser, createUser };

module.exports = UserController;
