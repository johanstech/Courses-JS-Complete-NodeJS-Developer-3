// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([7, 6, 9]);
//     reject("Something went wrong!");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("Success!", result);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

//? Promise terminology
//*                        fulfilled
//*  Promise -- pending ->
//*                        rejected

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// add(3, 7)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

add(3, 7)
  .then((sum) => {
    console.log(sum);
    return add(sum, 5);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => {
    console.log(e);
  });
