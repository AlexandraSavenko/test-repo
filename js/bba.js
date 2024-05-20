//!===============================HomeTask=================================================================================
/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;
// function checkBrackets(str) {
//   const newArray = str.split("");
//   console.log(newArray);
//   const leftBr = [];
//   const rightBr = [];
//   for (const item of newArray) {
//     if (item === "(") {
//       leftBr.push(item);
//     } else if (item === ")") {
//       rightBr.push(item);
//     }
//   }

//   console.log(leftBr, rightBr);
//   return leftBr.length === rightBr.length;
// }

// console.log(checkBrackets(someFn));
//=========================================================================================
// function verify(text) {
//   const stack = [];
//   for (const c of text) {
//     if (c === "(") stack.unshift(")");
//     else if (c === "[") stack.unshift("]");
//     else if (c === "<") stack.unshift(">");
//     else if (c === stack[0]) stack.shift();
//     else if (c === ")" || c === "]" || c === ">") return 0;
//   }
//   return 1;
// }

// const test_inputs = [
//   "---(++++)----",
//   "",
//   "before ( middle []) after ",
//   ") (",
//   "<( >)",
//   "( [ <> () ] <> )",
//   " ( [)",
// ];
// for (const i of test_inputs) {
//   console.log(verify(i));
// }
//===========================Me, trying to understand what it all is============================================
/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// console.log(checkBrackets(someFn));
// function isValidParentheses(str) {
//   const stack = [];
//   const pairs = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   for (let char of str) {
//     if (pairs[char]) {
//       // console.log(char);
//       stack.push(char);
//       console.log(stack);
//     } else if (char === ")" || char === "]" || char === "}") {
//       if (pairs[stack.pop()] !== char) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// const inputString = "({()})";
// console.log(
//   `Is it a valid Paranthesis ? :
// ${isValidParentheses(inputString)}`
// );
