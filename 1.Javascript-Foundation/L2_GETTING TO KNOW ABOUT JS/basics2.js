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

/*
Variables and constants
In every programming language, we have to deal with data. This data can be of different types. Now, the data that we need to deal with, we have to save it somewhere, right? So, to save this data, we need some saving space where the data can be saved. And to save this, we also need to give it some name. And that's why we have to create variables and constants so that the data is saved and it also has a name so that we can access it later.

Variables and constants are used to store data.
Variables can store data and be changed.
Constants can store data but cannot be changed.
Both variables and constants take up memory on the browser.
The browser runs on RAM, so technically both variables and constants use RAM or space.

Jit compiler - uses the initial power of the interpreter and uses the running power of the compiler
*/
/*
Many features commonly used in JavaScript are not part of the core JavaScript language itself. These features, like manipulating the Document Object Model (DOM) or making network requests, are provided by the web browser environment where JavaScript runs. When used in JavaScript code, these features are essentially being called from the browser, not directly from the JavaScript language.

Imagine a bucket where everything that the browser provides is available to use in JavaScript. All those things are not part of JavaScript itself.
*/

// Variables and Constants (let, var, const)
console.log("hello");

// var (older way of declaring variables)
// var allows re-declaration and can be updated. It's function-scoped.
var a = 10; // Declaring a variable using 'var'

let b = 12; // Declaring a variable using 'let' (ES6 way)

const c = 12132; // Declaring a constant using 'const' (ES6 way)

// Output the values of the variables
console.log("Value of a:", a);
console.log("Value of b:", b);
console.log("Value of c:", c);

// Re-assigning values to 'var' and 'let' variables
a = 20;
b += 5; // This is allowed for 'let' and 'var'

console.log("Updated value of a:", a);
console.log("Updated value of b:", b);

// Trying to reassign 'const' will throw an error (uncomment to test)
// c = 50; // Uncommenting this will cause an error, as 'const' cannot be reassigned

// Function to calculate the sum of two numbers
function calculateSum(x, y) {
  return x + y;
}

// Calculate sum using updated variables
let sum = calculateSum(a, b);
console.log("Sum of a and b:", sum);

// Summary of differences:
// - 'var' is function-scoped and allows re-declaration and reassignment.
// - 'let' is block-scoped and allows reassignment, but no re-declaration in the same scope.
// - 'const' is block-scoped and does not allow reassignment or re-declaration after initialization.
