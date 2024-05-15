// var test = document.getElementById("test");
// var button = document.querySelector("button");
// var box = document.getElementById("changeMe");

// function changeColor() {
//   if (box.style.background == "red") {
//     box.style.background = "blue";
//   } else {
//     box.style.background = "red";
//   }
// }
// console.log(button, box, typeof button, typeof box);

// // function checkAge(age) {
// // if (checkAge <= 18) {
// //   console.log(You are an adult);
// // }
// // }

// test.innerHTML = "<u>Hello</u> World";
// console.log(test, typeof test);

// let username;
// console.log(username, typeof username);

// const guestName = "Sasha";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits`;

// const myName = "Alexandra";
// let nameLength = myName.length;
// const newMessage = `Username ${myName} is ${nameLength} characters long`;
// let lastChar = myName[nameLength - 1];
// console.log(newMessage);

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(lastElement);

// console.log(5 == "5");

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// let tryit = 5;
// console.log(tryit);

// let login = function (password) {
//   if (password === "test123") {
//     return "Successfully loged in";
//   } else {
//     return "Password incorrect, please try again";
//   }
// };
// let result = login("test12");
// console.log(result);

// let favNum = function (num) {};

// function multiply(x, y, z) {
//   const product = x * y * z;
//   return product;
// }
// const theResult = multiply(7, 3, 5);
// console.log(theResult);

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let total = a + d + c + b;
// console.log(total);

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber);

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   const checkPassword =
//     password === correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!";
//   return checkPassword;
//   console.log(checkPassword);
// }
// let password = "123";

// function foo() {
//   console.log("Hello world@!");
// }
// foo();

// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case "starter":
//       price = 0;
//       console.log(price);
//       break;
//     case "professional":
//       price = 20;
//       break;
//     case organization:
//       price = 50;
//       break;
//     default:
//       return "Invalide subscription type!";
//   }
//   return price;
// }
// getSubscriptionPrice();
// =======================================================================================
// function add(a, b, c) {
//   const addResult = a + b + c;
//   return addResult;
// }
// const sum = add(2, 3, 4);
// console.log(sum);

// function multiply(x, y, z) {
//   const product = x * y * z;
//   // Повертаємо результат виразу множення
//   return product;
// }

// // Результат роботи функції можна зберегти у змінну
// const result = multiply(2, 3, 5);
// console.log(result); // 30
// function multiply(x, y, z) {
//   console.log("The code before return is executed as usual");

//   return x * y * z;

//   console.log("This code is never executed because it is after return");
// }

// console.log(multiply(2, 3, 5)); // 30

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price}`;
// }
// console.log(makeMessage("Alex", 20000000));

// function checkAge(age) {
//   if (age >= 18) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// age = 12;
// console.log(checkAge(age));

// function checkStorage(ordered, available) {
//   if (ordered >= available) {
//     return "We don't have that number";
//   } else {
//     return "You order has been confirmed";
//   }
// }
// ordered = 20;
// available = 50;

// ordered = 20;
// available = 10;
// console.log(checkStorage(ordered, available));

// function checkStorage(ordered, available) {
//   if (ordered === 0) {
//     return "You haven't ordered yet";
//   } else if (ordered <= available) {
//     return "your order has been taken";
//   } else {
//     return "we don't have that number";
//   }
// }
// ordered = 0;
// available = 20;
// console.log(checkStorage(ordered, available));

// function checkPassword(password) {
//   const correctPassword = "abc123";
//   if (password === correctPassword) {
//     return "You are in";
//   } else {
//     return "You are busted";
//   }
// }
// password = "abc12";
// console.log(checkPassword(password));

// function checkPassword(password) {
//   const correctPassword = "abc123";
//   const yourPassword =
//     password === correctPassword ? "You are in" : "You are busted";
//   return yourPassword;
// }
// password = "abc12";
// console.log(checkPassword(password));

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   const checkPassword =
//     password === correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!";
//   return checkPassword;
// }

// const favouriteAnimal = "robot";
// switch (favouriteAnimal) {
//   case "robot":
//     console.log("yes");
//     break;
//   case "cat":
//     console.log("no");
//     break;
// }

// =========My code "No function"
// let price;
// let type;
// switch (type) {
//   case "starter":
//     price = 0;
//     break;
//   case "user":
//     price = 20;
//     break;
//   case "pro":
//     price = 50;
//     break;
//   default:
//     price = "you haven't chosen yet!";
// }

// console.log(type);
// console.log(price);
// ===========My code "with function"
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case "starter":
//       price = 0;
//       break;
//     case "user":
//       price = 20;
//       break;
//     case "pro":
//       price = 50;
//       break;
//     default:
//       price = "you haven't chosen yet!";
//   }
//   return;
// }
// console.log(getSubscriptionPrice("pro"));
// ====================================================================================
// function getProductPrice(type) {
//   let price;
//   switch (type) {
//     case "basic":
//       price = 10;
//       break;
//     case "premium":
//       price = 30;
//       break;
//     case "deluxe":
//       price = 50;
//       break;
//     default:
//       price = "Invalid product type!";
//   }
//   return price;
// }
// console.log(getProductPrice("type"));
// if ("") {
//   console.log("No");
// } else {
//   console.log("Yes");
// }
// // =========================================================================================
// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(isNumberInRange(1, 10, 5));
// ===============================================================================================
// function checkAccess(subType) {
//   if (subType == "pro" || subType == "vip") {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(checkAccess("basic"));
// ============================================================================================
// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// =============================================================================================
// let isModalVisibility = false; this was offered by chatGPT and originally function was empty, but I removed this line and put the name of the variable into the function and it works.
// function toggleModalVisibility(isModalVisibility) {
//   isModalVisibility = !isModalVisibility;
//   return isModalVisibility;
// }
// console.log(toggleModalVisibility(true));
// ===============================================================================================
// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring("Hello world", 3));
// ===========================================================================================
// function normalizeInput(input, to) {
//   if (to === "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// =============================================================================================================
// function checkForName(fullName, firstName) {
//   const fnl = fullName.toLowerCase();
//   const fstnl = firstName.toLowerCase();
//   const answer = fnl.includes(fstnl);
//   if (answer) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// function checkForName(fullName, firstName) {
//   const fnl = fullName.toLowerCase();
//   const frsnl = firstName.toLowerCase();
//   return fnl.includes(frsnl);
// }
// console.log(checkForName("Caty Stars", "cAtY"));
// ===================================================================================================
// function checkFileExtension(fileName, ext) {
//   return fileName.endsWith(ext);
// }
// console.log(checkFileExtension("styles.css", ".css"));
// ======================================================================================================
// function getFileName(file) {
//   const getIndex = file.indexOf(".");
//   const getName = file.slice(0, getIndex);
//   return getName;
// }
// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// ===============================================================================================
// function getFileName(file) {
//   if (file.includes(".")) {
//     const getIndex = file.indexOf(".");
//     const getName = file.slice(0, getIndex);
//     return getName;
//   } else {
//     return file;
//   }
// }
// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("index"));
// ======================================================================
//Got me totally confused!!!
// function calculateTotal(number) {
//   let totalNumber = 0;
//   let count = 1;
//   while (count <= number) {
//     totalNumber += count;
//     count += 1;
//   }
//   return totalNumber;
// }
// console.log(calculateTotal(18));
// ======================================================================
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// i is the starting point; 20 is the ending point; i++ = i+=1, but any number could be used;
// for (let n = 10; n > 0; n--) {
//   console.log(n);
// }
// to skip a number use "continue", to stop at some point use "break"
// for (let i = 0; i <= 20; i++) {
//   if (i == 13) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
// ================================================================
// let userName = "";
// while (userName === "") {
//   userName = window.prompt("Enter your name");
// }
// console.log(`Hello, ${userName}`);
// here we need to give userName some meaning from the very beginning otherwise we'll skip the while-loop in the first place
// ==================================================================================
// let userName;
// do {
//   userName = window.prompt("Enter your name");
// } while (userName === "");
// console.log(`Hello ${userName}`);
// =================================================================
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// ========================================================================
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(18));
// =========================================================================
// function calculateEvenTotal(number) {
//   let a = 0;
//   for (let b = 0; b <= number; b += 2) {
//     a += b;
//   }
//   return a;
// }
// console.log(calculateEvenTotal(7));
// ++++++++Here's how to explain it+++++++++++++++++++++++++++++
// The function is called with number set to 7.
// The for loop iterates over even numbers from 0 to 7, inclusive.
// During the iteration:
// When b is 0, a becomes 0 + 0 = 0.
// When b is 2, a becomes 0 + 2 = 2.
// When b is 4, a becomes 2 + 4 = 6.
// When b is 6, a becomes 6 + 6 = 12.
// The loop terminates after b becomes 8, because 8 is greater than 7.
// The function returns the value of a, which is 12.
// So, calculateEvenTotal(7) returns 12 because it calculates the sum of all even numbers from 0 to 7, which includes 6. Therefore, the result is greater than 7.
// ====================================================================================
// const start = 6;
// const end = 17;
// let number;
// for (let rest = number % 5; rest === 0; rest++) {
//   console.log(rest);
//   if (rest >= end && rest <= start) {
//     break;
//   }
// }
// console.log((number = 10));
// ===============================================================================================
// const start = 17;
// const end = 25;
// let number;
// for (let number = start; number <= end; number++) {
//   if (number % 5 === 0) {
//     console.log(number);
//     break;
//   }
// }
// ======================================================================
// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");
//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);
//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//       break;
//     }
//   }
//   console.log("Log in the body function after cycle");
// }
// findNumberFromFive(10, 7);
// console.log("Log after exiting function");
// ================================================================================
// function findNumberFromFive(max, target) {
//   console.log("Log in the body of the function before the cycle");
//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);
//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//       return i;
//     }
//   }
//   console.log("Log in the body function after cycle");
// }
// const result = findNumberFromFive(10, 7);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);
// ================================================================================================
// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(8, 17, 3));
// ===============================================================================================
// function getOrderQuantity(order) {
//   return order.length;
// }
// =========================================================================================
// function getLastElementMeta(array) {
//   const indArray = array.length - 1;
//   const lastArray = array[indArray];
//   return [indArray, lastArray];
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
//  and if I didn't want to see the number of returned values from the array, I could do this
// console.log(...getLastElementMeta(["apple", "peach", "pear", "banana"]));
// but I could also use Object in return. Here's how
// function getLastElementMeta(array) {
//   const indArray = array.length - 1;
//   const lastArray = array[indArray];
//   return { lastIndex: indArray, lastElement: lastArray };
// }
// ==============================================================================================
// function getExtremeElements(array) {
//   const lnArray = array.length;
//   const fstArray = array[0];
//   return [fstArray, lnArray];
// }
// const boo = getExtremeElements([1, 2, 3, 4, 5]);
// console.log(boo);
// function getExtremeElements(array) {
//   const lnArray = array.length - 1;
//   const lastInArray = array[lnArray];
//   console.log(lastInArray);
//   const fstArray = array[0];
//   return [fstArray, lastInArray];
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// ============================================================================================
// function calculateEngravingPrice(message, pricePerWord) {
//   const messageArray = message.split(" ");
//   console.log(messageArray);
//   console.log(messageArray.length);
//   return messageArray.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// ===============================================================================================
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);
// ============================================================================================
// function getSlice(array, value) {
//   const valInd = array.indexOf(value);
//   const newArray = array.slice(0, valInd + 1);
//   return array.indexOf(value) ? newArray : array.slice();
// }
// Here the mistake was very simple: array.slice() without begining and end will return a full array instead of an empty one)

// function getSlice(array, value) {
//   const valInd = array.indexOf(value);
//   console.log(valInd);
//   const newArray = array.slice(0, valInd + 1);
//   return valInd >= 0 ? newArray : [];
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
// ================================================================================================
// function createArrayOfNumbers(min, max) {
//   const newArray = [];
//   for (let i = min; i <= max; i++) {
//     newArray.push(`${i}`);
//   }
// }
//  first I made a mistake and used commas instead of semicolons in the for condition and then I also forgot to write return from the function;
// =================================================================
//function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// let myNum = [1, 2, 3, 40, 7];
// let sum = 0;
// console.log(myNum);
// for (let i = 0; i < myNum.length; i++) {
//   sum += myNum[i];
// }
// console.log(sum);
//=====================================================================
// create an array
// const myNums = [1, 2, 3, 4, 7];

// create a variable for the sum and initialize it
// let sum = 0;

// calculate sum using forEach() method
// myNums.forEach((num) => {
//   sum += num;
//   console.log(num);
// });

// console.log(sum); // 15
//=============================================================
// function getEvenNumbers(start, end) {
//   let evenNum = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNum.push(i);
//     }
//   }
//   return evenNum;
// }
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(7, 7));
// =============================================
// function getOddNumbers(start, end) {
//   let oddNum = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 !== 0) {
//       oddNum.push(i);
//     }
//   }
//   return oddNum;
// }
// console.log(getOddNumbers(10, 14));
// ===========================================================
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   //   const minlength = Math.min(array1.length, array2.length);
//   //   console.log(minlength);
//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log();
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (number of order) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// =========================================================================================
// function createReversedArray() {
//   const myArray = Array.from(arguments);
//   return myArray.toReversed();
// }
//! It's supper cool method and it took me half an hour to figure it out!!!!!!!
// function createReversedArray() {
//   let myArray = [];
//   for (let i = 0; i < arguments.length; i += 1) {
//     myArray.push(arguments[i]);
//   }
//   return myArray.toReversed();
// }
// console.log(createReversedArray());
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(412, 371, 94, 63, 176));
//===================================================================
// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     console.log(arg);
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120
// ======================================================================================
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100));
// console.log(calculateTax(200));
// ============================================================================================
//! had some hard time with for...in loop, can't comprehend how the hole key-value thing works
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
// }
// for (const value in apartment) {
//   values.push(apartment[value]);
// }
// console.log(keys, values);
// ==============================================================================================
// !for...in vs for...of loops in case an array for...in only gives you indexes of the values.
// const numbers = [1, 3, 5, 7, 9];
// for (let number of numbers) {
//   console.log(numbers[4]);
// }
// for (let number in numbers) {
//   console.log(numbers[2]);
// }
// ======================================================================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys);
// for (let a of keys) {
//   values.push(apartment[a]);
// }
// console.log(values);
// ======================================================================================
//! the task was to change (refacture) the function
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }
// function countProps(object) {
//   const objectArray = Object.keys(object);
//   console.log(objectArray);
//   return objectArray.length;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log();
//============================================================================================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const arraySalaries = Object.values(salaries);
//   console.log(arraySalaries);
//   for (const x of arraySalaries) {
//     totalSalary += x;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// =======================================================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
// =====================================================================================
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const item of products) {
//     // console.log(item.price);
//     if (item.name === productName) {
//       return item.price;
//     }
//   }
// }
// console.log(getProductPrice("Radar"));
//==================================================================================
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const newArray = [];
//   for (const x of products) {
//     console.log(x);
//     if (x.hasOwnProperty(propName)) {
//       newArray.push(x[propName]);
//     }
//   }
//   return newArray;
// }
// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("name"));
// =====================================================================================
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     console.log(product);
//   }
// }
// // console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
//======================================================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // const keys = Object.keys(apartment);
// // console.log(keys);
// for (let a in apartment) {
//   values.push(apartment[a]);
// }
// console.log(values);
//===========================================================================
// // function getAllPropValues(propName) {
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const newArray = [];
// for (const x of products) {
//   if (x.price) {
//     newArray.push(x["price"]);
//     console.log(newArray);
//   }
// }
// // return newArray;

// // }
//========================================================================
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let totalPrice = `Product ${productName} not found`;
//   for (const item of products) {
//     if (item.name === productName) {
//       totalPrice = item.price * item.quantity;
//       break;
//     }
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice("Blaster")); //"Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); //5200
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
//=================================================================================
//! without .hasOwnProperty()=====================================================
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const newArray = [];
//   for (const x of products) {
//     if (x[propName]) {
//       newArray.push(x[propName]);
//     }
//   }
//   return newArray;
// }
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("name"));
// =================================================================================
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const item of this.potions) {
//       if (item.name === oldName) {
//         item.name = newName;
//       }
//     }
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.getPotions());
//==============================================================
//!the .push() method returns the length of the array and not its values!!!
// let arr = [];

// console.log(fillArray(2, 10));

// function fillArray(min, max) {
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }
//===============================================================================
// function getExtremeScores(scores) {
//   const object = {};
//   const biggest = Math.max(...scores);
//   console.log(biggest);
//   const smallest = Math.min(...scores);
//   console.log(smallest);
//   object.best = biggest;
//   object.worst = smallest;
//   return object;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
//=======================================================================
// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];
// function getWomen(users, men) {
//   const girls = [];
//   for (const user of users) {
//     if (!men.includes(user)) {
//       girls.push(user)
//     }
//     }
//   }

// console.log(getWomen(users, men))
//==============================================================================
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];
// for (i = 1; i < numbers.length; i++) {
//   const currentEl = numbers[i];
//   const previousEl = numbers[i - 1];
//   if (currentEl <= previousEl) {
//     numbers[i] = previousEl + 1;
//   }
// }
// console.log(numbers);
//=================================================================================
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza)); //"Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); //"Delivering Ultracheese pizza.";
//================================================================================
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
// ===================================================
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function price(item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//==============================================================
// function filterArray(numbers, value) {
//   const newArray = [];
//   numbers.forEach(function number(item) {
//     if (item > value) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//============================================================
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   console.log(orderedItems);
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//==============================================================
// function changeEven(numbers, value) {
//   const newNumbers = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       console.log(number);
//       newNumbers.push(number + value);
//     }
//   });
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//=================================================================
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   return numbers;
// }
//! clean function
// function changeEven(numbers, value) {
//   const newNumbers = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     } else {
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//================================================================
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
//=================================================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);
//====================================================================
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserEmails = (users) => {
  const eachUser = users.map((user) => user.email);
  return eachUser;
};
console.log(getUserEmails(users));
