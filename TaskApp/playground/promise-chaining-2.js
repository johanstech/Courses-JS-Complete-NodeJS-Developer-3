require("../src/db/mongoose");
const Task = require("../src/models/task");

const _id = "6104fd15790a31068d1db637";

Task.findByIdAndDelete(_id).then((task) => {
  console.log(task);
  return Task.countDocuments({ completed: false })
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
});
