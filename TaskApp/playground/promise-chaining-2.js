require("../src/config/db");
const { Task } = require("../src/models");

const _id = "629e4bab0fa5367c8de3020c";

//? Promise chaining
// Task.findByIdAndDelete(_id).then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

const deleteTaskAndCount = async (id) => {
  const deleted = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount(_id)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
