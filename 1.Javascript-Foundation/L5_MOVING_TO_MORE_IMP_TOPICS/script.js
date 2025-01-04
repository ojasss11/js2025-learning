// Declaring a variable without assigning a value (default value will be undefined)
let a;
console.log(a); // Logs 'undefined' because the value of 'a' is not assigned yet.

// Arrays in JavaScript: Useful when you need to store multiple values in a single variable.
let users = ["harsh", "harshita", "harshiya", "nishi", "akansha"];
console.log(users[0]); // Logs 'harsh' - the first element of the array.

// Arrays in JavaScript start indexing from 0, so the first element is at index 0.

// Default value for a variable not assigned a value is 'undefined'.
let arr = [1, 2, 3, 4, function () {}, [], 4];
console.log(arr[4]); // Logs the function at index 4.

// Initializing arrays with values
arr = [1, 2, 3, 4];
let arr2 = [1, 12, 3, 4];

// Why do we need arrays? Often, data comes in a format that involves more than one item.
// An array helps us store multiple values together.

/* Looping through an array to perform operations on each element */
let arr3 = [1, 2, 3, 4, 5, 6];

// Using forEach to loop through the array and print each value.
arr3.forEach(function (val) {
  console.log(val); // Prints each element of the array.
});

/* Objects in JavaScript: 
   Objects are a way to group related data, usually for a specific entity (like a person or a city).
   Example: A city could have an array of data, while an individual (like Harsh) might have an object with many details.

   Arrays are used for storing data for many items, while objects store data for a single entity.
*/

// Example object representing a person
let obj1 = {
  name: "Harsh", // Name of the person
  age: 25, // Age of the person
  email: "kuch@kuch.com", // Email address
  contact: 182931238912938, // Contact number
};

// Example object representing a product (battery)
let battery = {
  company: "Canon", // Company that manufactures the battery
  price: 120000, // Price of the battery
  userFor: "Camera", // Intended use of the battery
  isWorking: false, // Whether the battery is working or not
};

console.log(battery.company); // Logs 'Canon', the company of the battery.

// Synchronous vs Asynchronous Code:
// In synchronous code, execution happens line by line.
// In asynchronous code, multiple tasks can start at once, and the results come back when they are ready.
// Asynchronous tasks run in a separate stack and don't block the main thread.

let numbers = [10, 20, 30, 40, 50];
let total = 0;
numbers.forEach(function (num) {
  total += num;
});
console.log(total);

let person = {
  name: "Aboli",
  country: "India",
  job: "Developer",
};

person.age = 22;
console.log(person);

let fruits = ["apple", "banana", "cherry"];
let newFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(newFruits);

let ages = [15, 22, 33, 18, 44];
let adultAges = ages.filter(function (age) {
  return age >= 18;
});
console.log(adultAges);

let sum = (a, b) => a + b;
console.log(sum(5, 7));

let num1 = 10;
let num2 = 20;
if (num1 < num2) {
  console.log("num1 is less than num2");
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let firstDay = days[0];
console.log(firstDay);

let scores = [95, 80, 70, 85, 92];
let highestScore = Math.max(...scores);
console.log(highestScore);

let personInfo = {
  name: "Ravi",
  city: "Pune",
  profession: "Engineer",
};
personInfo.city = "Mumbai";
console.log(personInfo);

let numbersList = [5, 10, 15, 20];
let doubled = numbersList.map((n) => n * 2);
console.log(doubled);

let cities = ["New York", "London", "Paris", "Tokyo"];
let firstCity = cities.pop();
console.log(firstCity);

let details = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021,
};
delete details.year;
console.log(details);

let animals = ["dog", "cat", "elephant"];
animals.unshift("lion");
console.log(animals);

let colors = ["red", "green", "blue"];
let joinedColors = colors.join(", ");
console.log(joinedColors);

let numbersArray = [2, 4, 6, 8, 10];
let evenNumbers = numbersArray.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let user = {
  username: "admin",
  password: "password123",
};
user.username = "newUser";
console.log(user);

let temperatures = [25, 30, 35, 40];
let fahrenheit = temperatures.map((celsius) => (celsius * 9) / 5 + 32);
console.log(fahrenheit);

let prices = [50, 100, 150, 200];
let totalPrice = prices.reduce(function (total, price) {
  return total + price;
}, 0);
console.log(totalPrice);

let studentGrades = [85, 90, 78, 92];
let averageGrade =
  studentGrades.reduce((total, grade) => total + grade, 0) /
  studentGrades.length;
console.log(averageGrade);

let numArray = [3, 9, 27, 81];
let multiplied = numArray.reduce((acc, num) => acc * num, 1);
console.log(multiplied);
