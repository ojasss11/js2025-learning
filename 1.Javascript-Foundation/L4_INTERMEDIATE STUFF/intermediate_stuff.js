"use strict";
/*
Functions in Javascript:: es5 and es6
es5- Function statements,Function Expressions,Anonymous Functions
es6- Fat arrow functions
a)Basic fat arrow
b)Fat arrow with one param
c)Fat arrow with implicit return
*/
/*
Functions - In JavaScript, functions are not like in normal programming languages,which means that you don't have to specify a type  when creating functions in JavaScript. You just need to write the word "function"
*/
/*What is function?
 Any code that you need to use repeatedly,or any code that you don't want to run immediately but might run later, can be put into a function.
*/
/*
console.log("Bartan uthao");
console.log("Chawal dalo");
console.log("Pani dalo");
console.log("Gas par chadao for 20mins");
console.log("Gas off karke thanda kardo");
console.log("Khaalo");
*/
function chawalBanao() {
  console.log("Bartan uthao");
  console.log("Chawal dalo");
  console.log("Pani dalo");
  console.log("Gas par chadao for 20mins");
  console.log("Gas off karke thanda kardo");
  console.log("Khaalo");
}
chawalBanao();
function abcd() {
  let i = 12;
  console.log(i);
  for (let b = 10; b <= 15; b++) {
    console.log(b);
  }
}
abcd();
for (let i = 1; i < 11; i++) {
  console.log("hulla");
}
function happyBirthday() {
  console.log("Happy Birthday");
}
let dateOfBirth = 12;
let todaysDate = 14;
if (dateOfBirth === todaysDate) {
  happyBirthday();
}
/*Why we need->To reuse code and to wrap the code which we want to run in future at some point of time
 */
/*How to use function
 function abcd(){ your code }
 */
/*

Extras we should know
Parameters and Arguments
*/
// In JavaScript:

// Parameter: A placeholder or variable in a function's definition.
// It's like a blank box waiting to be filled with data when the function is called.

function greet(name) {
  // 'name' is a parameter
  console.log("Hello, " + name); // Uses the parameter
}

// Argument: The actual value you pass to a function when you call it.
// It's the real data that fills the blank box.

greet("Aboli"); // "Aboli" is an argument

// 💡 Summary:
// - Parameters are in the function definition.
// - Arguments are the values sent when calling the function.
/* Preparation for interviews:*/
// Function Declaration
function abcd() {
  // Function statements
  console.log("This is a function declaration.");
}

// Function Expression
var abcd2 = function () {
  // Function written inside a variable
  console.log("This is a function expression.");
};

// Anonymous Function
// A function without a name (used directly, often as a callback)
setTimeout(function () {
  console.log("This is an anonymous function.");
}, 1000);

// Fat Arrow Functions (=>)
let fatArrow = () => {
  console.log("This is a basic fat arrow function.");
};

let fatArrow2 = () => console.log("Another fat arrow function.");

/*
Fat Arrow Functions come in 3 types:
1. Basic Fat Arrow Function
2. Fat Arrow with One Parameter
3. Fat Arrow with Implicit Return
*/

// 1. Basic Fat Arrow Function
let basicArrow = () => {
  console.log("Basic Fat Arrow Function");
};

// 2. Fat Arrow with One Parameter
let oneParam = (name) => {
  console.log("Hello, " + name);
};

// 3. Fat Arrow with Implicit Return (No curly braces needed for one-line return)
let implicitReturn = () => "Returning a value";

// Examples
abcd(); // Calls the function declaration
abcd2(); // Calls the function expression
fatArrow(); // Calls the basic fat arrow function
oneParam("Aboli"); // Outputs: Hello, Aboli
console.log(implicitReturn()); // Outputs: Returning a value

/* The meaning of 'return' is, wherever 'return' is used, whatever you write after it will go to where the function was called, 'return' is used inside functions.
The function that doesn't returns anything returns undefined*/

function abcd1(){
  return 12;
}
// abcd1();  -->12
let value=abcd1(); 
console.log(value);
console.log(abcd1());