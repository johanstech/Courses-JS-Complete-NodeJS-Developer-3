require("../src/config/db");
const { User } = require("../src/models");

const _id = "629d90b982fbd1168e97942d";

//? Promise chaining
// User.findByIdAndUpdate(_id, { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//? Async/await
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount(_id, 30)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
