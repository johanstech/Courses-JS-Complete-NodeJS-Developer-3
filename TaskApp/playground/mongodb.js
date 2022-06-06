// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    //* CRUD - Create, Read, Update, Delete
    //* MongoDB - Insert (Create), Find (Read), Update, Delete

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

    //#region Update
    //? Update one
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("61047809f4ff499d18695015"),
    //     },
    //     {
    //       $set: {
    //         name: "Fredde",
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

    //#region Find
    //? Find one
    // db.collection("users").findOne(
    //   { _id: new ObjectId("61047809f4ff499d18695015") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to find user.");
    //     }

    //     console.log(user);
    //   }
    // );

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
    //     _id: id,
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
    //       age: 28,
    //     },
    //     {
    //       name: "Fredrik",
    //       age: 28,
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
  }
);
