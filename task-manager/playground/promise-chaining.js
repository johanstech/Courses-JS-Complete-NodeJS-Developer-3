require("../src/db/mongoose");
const User = require("../src/models/user");

const _id = "6105143d68852308caad8083";

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
