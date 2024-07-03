// const fetchUserFromServer = (theUsername, onSuccess, onError) => {
//   console.log(`fetching data from ${theUsername}`);
//   setTimeout(() => {
//     const isSuccess = true;
//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error value");
//     }
//   });
// };
// fetchUserFromServer(
//   "mango",
//   (user) => console.log(user),
//   (error) => console.log(error)
// );
// console.log("Hello world");
//
// const fetchUserFromServer = (theUsername) => {
//   return new Promise((resolve, reject) => {
//     console.log(`fetching data from ${theUsername}`);
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve("success my value");
//       } else {
//         reject("error value");
//       }
//     }, 2000);
//   });
// };
// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));

// console.dir(fetchUserFromServer("Mango"));
// /**
//  *? Використовуючи функцію if...else,
//  *? напишіть код, який запитуватиме:
//  *? "Яка офіційна назва JavaScript?"
//  *? Якщо користувач вводить "ECMAScript",
//  *? то показати через alert: "Вірно!"
//  *? інакше відобразити:"Не знаєте? ECMAScript!"
//  */
// function foo() {
//   const question = prompt("Яка офіційна назва JavaScript?").trim();
//   switch (question) {
//     case "ECMAScript":
//       alert("Вірно!");
//       break;
//     case " ":
//       alert("Не знаєте? ECMAScript!");
//       break;
//     case "":
//       break;
//   }
//   // if (question === "ECMAScript") {
//   //   alert("Вірно!");
//   // } else {
//   //   alert("Не знаєте? ECMAScript!");
//   // }
// }
// console.log(foo());
// const makeGreeting = (guestName) => {
//   if (!guestName) {
//     return Promise.reject("Guest name must not be empty");
//   } else {
//     return Promise.resolve(`hello ${guestName}`);
//   }
// };

// console.log(
//   makeGreeting(prompt("What's your name?"))
//     .then((greeting) => console.log(greeting))
//     .catch((error) => console.log("there is a mistake"))
// );
const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
};
