var test = document.getElementById("test");
var button = document.querySelector("button");
var box = document.getElementById("changeMe");

function changeColor() {
  if (box.style.background == "red") {
    box.style.background = "blue";
  } else {
    box.style.background = "red";
  }
}
console.log(button, box, typeof button, typeof box);

test.innerHTML = "<u>Hello</u> World";
console.log(test, typeof test);

let username;
console.log(username, typeof username);

const guestName = "Sasha";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(totalPrice);
const message = `You ordered droids worth ${totalPrice} credits`;

const myName = "Alexandra";
let nameLength = myName.length;
const newMessage = `Username ${myName} is ${nameLength} characters long`;
let lastChar = myName[nameLength - 1];
console.log(newMessage);

const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
console.log(courseTopicLength);
const firstElement = courseTopic[0];
console.log(firstElement);
const lastElement = courseTopic[courseTopicLength - 1];
console.log(lastElement);

console.log(5 == "5");

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

let tryit = 5;
console.log(tryit);

let login = function (password) {
  if (password === "test123") {
    return "Successfully loged in";
  } else {
    return "Password incorrect, please try again";
  }
};
let result = login("test12");
console.log(result);

let favNum = function (num) {};

function multiply(x, y, z) {
  const product = x * y * z;
  return product;
}
const theResult = multiply(7, 3, 5);
console.log(theResult);
