const express = require("express");
// const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const routes = require("./routes");

const db = require("./config/db");
const { Task } = require("./models");

const app = express();
app.use(express.json());

app.use(routes);

db.once("open", async () => {
  console.log(`MongoDB Connected: ${db.host}`);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
