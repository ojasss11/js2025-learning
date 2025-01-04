/*
JS --THE LANGUAGE && JS THE DOM
::-- Js the language,managed by ECMASCRIPT
::--JS the language-->CODE LIKHNA SIKHNA, 
::--JS the dom -->CODE likhkar chize banana sikhna,
Basics
Inbuilt features
variables and constants
compilers and interpreter
window
types
conditionals
loops
functions
arrays
objects
questions 
prototypal inheritance
asynchronous js
es6 climax
questions
*/
let a = 12;
let b = 8;
console.log(a + b);

//You can have all the tools in your box and grammer is like ability to use them
// console , alert , prompt
console.log("hello");
// alert("hey");
// console.warn("heyyy");
let age = prompt("Enter your age: ");
console.log(`You are ${age} years old.`);

// Variable & Constant Example
let name = "John"; // This is a variable
const country = "India"; // This is a constant
console.log(name, country);

// Data Types
let number = 20; // Number
let text = "This is a string"; // String
let isTrue = true; // Boolean
let person = { name: "Jane", age: 30 }; // Object
console.log(typeof number, typeof text, typeof isTrue, typeof person);

// Conditionals
let temp = 30;
if (temp > 25) {
  console.log("It's hot outside!");
} else {
  console.log("The weather is cool.");
}

// Loops
for (let i = 1; i <= 5; i++) {
  console.log("This is loop iteration: " + i);
}

// Functions
function greetUser(name) {
  console.log("Hello, " + name);
}
greetUser("Alice");

// Arrays
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Accessing the second element

// Objects
let personObj = {
  name: "Sam",
  age: 25,
  greet: function() {
    console.log("Hello " + this.name);
  }
};
personObj.greet(); // Method of an object

// Asynchronous JS (setTimeout)
setTimeout(() => {
  console.log("This message appears after 3 seconds!");
}, 3000);

// ES6 Example (Arrow Functions)
const sum = (x, y) => x + y;
console.log(sum(5, 3));

// Prototypal Inheritance Example
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

let dog = new Animal("Max");
dog.sayHello();

// Prompt for User Input
let city = prompt("Enter your city name: ");
console.log(`You live in ${city}`);
