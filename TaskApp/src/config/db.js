const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectionURL = process.env.MONGO_URI;

mongoose.connect(connectionURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
