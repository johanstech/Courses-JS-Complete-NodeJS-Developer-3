require("../src/config/db");
const { User } = require("../src/models");

const _id = "629d90b982fbd1168e97942d";

User.findByIdAndUpdate(_id, { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
