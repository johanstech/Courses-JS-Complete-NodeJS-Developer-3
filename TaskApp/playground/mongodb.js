const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectionURL = process.env.MONGO_URI;

mongoose.connect(connectionURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.once("open", async () => {
  console.log(`MongoDB Connected: ${db.host}`);
});

const id = "629d90b982fbd1168e97942d";
const testUserId = new mongoose.Types.ObjectId(id);

//#region Find
//? Find one
db.collection("users").findOne({ _id: testUserId }, (error, user) => {
  if (error) {
    return console.log("Unable to find user.");
  }
  console.log(user);
});

// //? Find
// db.collection("users")
//   .find({ age: 28 })
//   .toArray((error, users) => {
//     console.log(users);
//   });

//* Challenge
// db.collection("tasks").findOne(
//   { _id: new ObjectId("61047965cca5e47b6ed93c8d") },
//   (error, task) => {
//     console.log(task);
//   }
// );

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     console.log(tasks);
//   });
//#endregion

//#region Insert
//? Insert one
// db.collection("users").insertOne(
//   {
//     name: "Johan",
//     age: 29,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user.");
//     }
//     console.log(result.insertedId);
//   }
// );

//? Insert many
// db.collection("users").insertMany(
//   [
//     {
//       name: "Tobias",
//       age: 29,
//     },
//     {
//       name: "Fredrik",
//       age: 29,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents.");
//     }
//     console.log(result.insertedIds);
//   }
// );

//* Challenge
// db.collection("tasks").insertMany(
//   [
//     {
//       description: "Eat dinner",
//       completed: true,
//     },
//     {
//       description: "Finish this challenge",
//       completed: false,
//     },
//     {
//       description: "Reach halfway point of course",
//       completed: false,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents");
//     }

//     console.log(result.insertedIds);
//   }
// );
//#endregion

//#region Update
//? Update one
// db.collection("users")
//   .updateOne(
//     { _id: testUserId },
//     {
//       $set: {
//         email: "Johan@test.test",
//         password: "passw0rd",
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? Update many
//* Challenge
// db.collection("tasks")
//   .updateMany(
//     {
//       completed: false,
//     },
//     {
//       $set: {
//         completed: true,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//#endregion

//#region Delete
//? Delete one
//* Challenge
// db.collection("tasks")
//   .deleteOne({
//     description: "Eat dinner",
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? Delete many
// db.collection("users")
//   .deleteMany({
//     age: 28,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//#endregion
