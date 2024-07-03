// const LS_KEY = "checkout";
// const list = document.querySelector(".js-list");
// const clearBtn = document.querySelector(".js-clear");
// const totalPriceLabel = document.querySelector(".js-total-price");
// const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
// let totalPrice = 0;

// if (products.length) {
//   clearBtn.hidden = false;
//   totalPrice = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
// }

// totalPriceLabel.textContent = totalPrice
//   ? `Total price ${totalPrice} грн`
//   : "Your basket is empty";
// list.insertAdjacentHTML("afterbegin", createMarkup(products));
// clearBtn.addEventListener("click", handlerClearBasket);

// function handlerClearBasket() {
//   localStorage.removeItem(LS_KEY);
//   location.href = "../index.html";
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ img, price, qty, name }) => `
//        <li class="cart-item">
//         <img src="${img}" alt="${name}" class="product-img" />
//         <h2>${name}</h2>
//         <p>Quantity: ${qty}</p>
//         <p>Total price: ${qty * price}грн</p>
//       </li>`
//     )
//     .join("");
// }
// const arr = [];
// const theButton = document.querySelector(".js-btn");
// theButton.addEventListener("click", handlerTheBtn);
// function handlerTheBtn() {
//   const timer = setTimeout(() => {
//     arr.push(...arr, timer); // arr.push(timer)
//     console.dir(arr);
//   }, 2000);
// }
// const date = new Date();
// console.dir(date);

// // const startTime = Date.now();

// // for (let i = 0; i <= 100; i++) {
// //   console.log(i);
// // }
// // const endTime = Date.now();
// // const dur = endTime - startTime;
// // console.log(`the code took ${dur} miliseconds`);
// // const date = new Date("March 16, 2030 14:25:00");
// // console.log("Date: ", date);
// const isSuccess = false;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Yes, it's success");
//     } else {
//       reject("No, we failed");
//     }
//   }, 1000);
// });
// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Promise settled"));
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });
// myPromise
//   .then((value) => {
//     console.log(value);
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value);
//     return value * 3;
//   })
//   .then((value) => console.log(value))
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("finally"));

// *? Поверніть об'єкт, в якому вказано кількість тегів.
//*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
//
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const bigArr = tweets.flatMap((obj) => obj.tags);
// //(12) ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
// const foo = bigArr.reduce((acc, el) => {
//   return { ...acc, [el]: acc[el] ? acc[el] + 1 : 1 };
// }, {});
// console.log(foo);
//*? Напиши клас Storage який створює об'єкти
//  *? Для управління складом товарів.
//  *? При виклику отримуватиме один агрумент - початковий масив товарів,
//  *? і записувати їх у властивість items.
//  *? Додай методи класу:
//  *? getItems() - повертайте масив товарів
//  *? addItems(item) - отримує новий товар та додає його до поточних
//  *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//  */
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItem() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeImen(item) {
//     this.items = this.items.filter((elem) => elem !== item);
//   }
// }
// const storage = new Storage(["item1", "item2", "item3"]);
// storage.removeItem("item1");
// console.log(storage.getItems());
/**
 *? Поверніть об'єкт, в якому вказано кількість тегів.
 *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const newArr = tweets.flatMap((el) => el.tags);
// console.log(newArr);
// function foo(arr) {
//   return arr.reduce((acc, element) => {
//     // console.log(acc);
//     // console.log(element);
//     return { ...acc, [element]: acc[element] ? acc[element] + 1 : 1 };
//   }, {});
// }
// console.log(foo(newArr));
// ? Напиши функцію конструктор User для
// *? створення користувача з такими властивостями:
// *? a. userName - ім'я, рядок
// *? b. age - вік, число
// *? c. numbersOfPost - кількість постів, число
// *? d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// *? Додай метод getInfo(), який повертає рядок:
// *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`
//  */
// const User = function (newObj) {
//   const { userName, age, numberOfPost } = newObj;
//   this.userName = userName;
//   this.age = age;
//   this.numberOfPost = numberOfPost;
// };
// User.prototype.getInfo = function () {
//   console.log(
//     `Користувачеві ${userName} ${age} років і в нього ${numberOfPost} публікацій.`
//   );
// };
// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
const User = function (userObj) {
  const { userName, age, numbersOfPost } = userObj;
  this.username = userName;
  this.age = age;
  this.numbersOfPost = numbersOfPost;
};
User.prototype.getInfo = function () {
  console.log(
    `Користувачеві ${this.username} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`
  );
};
const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
console.log(polly);
