const express = require("express");

const port = process.env.PORT || 5000;

const db = require("./config/db");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

db.once("open", async () => {
  console.log(`MongoDB Connected: ${db.host}`);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
