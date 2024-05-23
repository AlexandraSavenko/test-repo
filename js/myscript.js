// const user = {
//   username: "Victor",
//   age: 32,
//   showName() {
//     this.username = "Alex";
//     console.log(`User ${this.username} is ${this.age} years old`);
//   },
// };

// user.showName();
//?This is a method defined using shorthand syntax for functions inside an object. It's equivalent to writing showName: function() { ... }.
//?The method logs the username property of the user object to the console. It uses the this keyword to refer to the user object.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     // console.log(pizzaName);
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     console.log(isPizzaAvailable);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// // console.log(pizzaPalace.checkPizza("Smoked"));
// console.log(pizzaPalace.order("Pizza"));
//==========================================================
// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result був результат
//виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// function makePizza(x) {
//   return "Your pizza is almost ready";
// }
// const x = "x";
// const result = makePizza(x);
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);
// Функція makeMessage приймає один параметр ім'я
// піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином, щоб вона
// очікувала другим параметром(параметр callback) колбек - функцію
// і повертала результат її виклику.Функції deliverPizza або makePizza
// будуть передаватися як колбек для makeMessage і очікувати аргументом
// ім'я готової піци, що доставляється.
// function deliverPizza(pizzaName) {
//   return `your pizza ${pizzaName} is waiting for you`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback;
// }
// console.log(makeMessage("Pizza", deliverPizza("Margarita")));
//==========================
//?Why do we repeat "pizzaName" in both functions? we don't, we need any words of the same number to  store the same amount of memory and once the memory is reserved, were put the values in it. Like a hotel. New values move in if there' enough rooms
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function calculateTotalPrice(x, y) {
//   return x * y;
// }

// function makeMessage(pizzaName, pizzaPrice, callback) {
//   return callback(pizzaName, pizzaPrice);
// }
// console.log(makePizza("Margarita"));
// console.log(makeMessage(4, 5, calculateTotalPrice));
// console.log(makeMessage("Ultracheese", deliverPizza));
//==============================================================================
// Функція calculateTotalPrice(orderedItems) приймає один параметр
// orderedItems - масив чисел, і розраховує загальну суму його елементів,
//   яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек - функцію,
//   яка на кожній ітерації додає до totalPrice значення поточного
//   елемента масива orderedItems.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach((element) => {
//     totalPrice += element;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([25, 25, 25, 25, 50, 100]));
//====================================================================
// Функція filterArray(numbers, value) приймає першим
// параметром масив чисел numbers і повертає новий масив,
//   в якому будуть тільки ті елементи оригінального масиву,
//   які більші за значення другого параметра числа value.
//     Якщо таких значень не буде знайдено, функція повертає
//     порожній масив.

// Виконай рефакторинг функції таким чином, щоб замість циклу
// for, вона використовувала метод forEach.
// function filterArray(numbers, value) {
//   const newArr = numbers.filter((element) => element > value);
//   return newArr;
// }
// console.log(filterArray([25, 45, 12, 16, 50, 100, 10], 1000));
//=============================================================================
// const calculateTotalNumber = (number) => {
//   let totalSum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     totalSum += i;
//   }
//   return totalSum;
// };

// console.log(calculateTotalNumber(0));
// //
//==========================================================================
// const numbers = [5, 10, 15, 20, 25];
// const foo = (number) => {
//   for (const num of numbers) {
//     console.log(`value ${num}`);
//   }
//   return number;
// };
// console.log(foo(100));
// Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });
//============================================================
// const Numbers = [5, 10, 15, 20, 25];
// const logMessage = (Number, index) => {
//   console.log(`Index ${index}, value ${Number}`);
// };
// Numbers.forEach(logMessage);
// const numbers = [5, 10, 15, 20, 25];
// const foo = (number) => {
//   for (const num of numbers) { // Замість 'number' використовуйте 'num' для уникнення конфліктів
//     console.log(`value ${num}`);
//   }
//   return number; // Повертає параметр 'number', який був переданий у функцію
// };

// console.log(foo(100)); // Приклад виклику функції з аргументом 100
// function logResult(a, b, callback) {
//   console.log(callback);
//   const result = callback(a, b);
//   console.log(`Result is ${result}`);
// }
// logResult(4, 5, add);

// function add(a, b) {
//   return a + b;
// }
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
function foo(array) {
  const newArr = [];
  for (let book of books) {
    if (book.rating >= MIN_BOOK_RATING) {
      newArr.push(book.author);
    }
  }
  console.log(newArr);
}
console.log(foo(books));
// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
