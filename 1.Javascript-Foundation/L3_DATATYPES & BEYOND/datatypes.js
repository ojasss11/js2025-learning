// jitesh-->String,12-->Integer,12.3-->Float,22.0-->Float ,true-->Boolean, a-->character
// Types = PRIMITIVE DATATYPES || Reference datatypes

// (),{},[]--> Reference datatypes
//12,12.4, harsh,true ,a ,null, undefined

let a = 12; //Primitive datatypes
let a1 = 12.1; //Primitive
let a2 = true; //Primitive
let a3 = []; //Reference
let a4 = false; //Primitive
let a5 = null; //Primitive
let a6 = function () {}; //reference

let c = 12;
let b = c;
console.log(c);
console.log(b);

let arr = [1, 2, 3, 4, 5, 6];
let e = arr;
console.log(arr);
console.log(e);

e.pop();
// Spread
let arr2 = [...arr];
console.log(arr2);

// Conditionals in Javascript=if-else, else-if, ternary operator, switch case
// Whenever you need to make a decision within a program about how the subsequent execution should proceed, you use if, else, and else-if statements.
/*
if(condition){}
*/
// If main hamesha true ya false aata hai
//Truthy and falsy values-->
// null undefined NaN 0  "" '' document.all false--> are all the falsy values
// Everything else are the truthy values
/*
12; Truthy
45;Truthy
false; Falsy value
document.all; Falsy value
null; Falsy value
true; Truthy value
("hello"); Truthy value
*/
if (12 > 13) {
  console.log("hey");
} else {
  console.log("hello");
}
if (15 > 14) {
  console.log("15 is greater");
} else {
  console.log("15 is not greater");
}

/* Loops in Javascript
loops=repeat
1 1 1 1 1 1 1 1 1
1 2 3 4 5 6 7 8 9
for,while,do-while,for-each,for-in,for-of

70% times for loop,25% times for-each

Structure of for loop::- 

for(start;end;change){}
for(start;end;change){}
for(start;end;change){}
for(start;end;change){}
for(start;end;change){}
*/

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Adding more similar JavaScript examples

// While loop example
let i = 0;
while (i < 5) {
  console.log("While Loop iteration: " + i);
  i++;
}

// Do-While loop example
let j = 0;
do {
  console.log("Do-While Loop iteration: " + j);
  j++;
} while (j < 3);

// For-Each loop example
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log("For-Each loop number: " + number);
});

// For-In loop example
let person = { name: "John", age: 30, country: "USA" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// For-Of loop example
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("For-Of loop fruit: " + fruit);
}

// Switch Case example
let color = "red";
switch (color) {
  case "red":
    console.log("Red color");
    break;
  case "green":
    console.log("Green color");
    break;
  case "blue":
    console.log("Blue color");
    break;
  default:
    console.log("Color not found");
}

// Ternary operator example
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, can't vote";
console.log(canVote);
