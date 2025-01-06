// 3. Styling elements dynamically using JavaScript (e.g., style, classList).
let h1 = document.querySelector("#hone");
// Styling the h1 element: changing font and size
h1.style.fontFamily = "cursive"; // Set the font family to cursive
h1.style.fontSize = "50px"; // Set the font size to 50px

// Adding a CSS class dynamically using classList
h1.classList.add("makeitRed"); // Adds the 'makeitRed' class to the h1 element

// 4. Creating and removing elements dynamically using JavaScript (e.g., createElement(), appendChild(), removeChild()).
// Creating a new h1 element dynamically
let h1New = document.createElement("h1");

// Setting the content and applying styles to the new h1 element
h1New.textContent = "hey"; // Set the text content of the new h1 element
h1New.classList.add("makeitRed"); // Apply 'makeitRed' class to the new h1 element
h1New.style.fontFamily = "cursive"; // Set the font family to cursive

// Optionally setting background color for the new h1 element (commented out)
// h1New.style.backgroundColor = "blue"; // Set background color to blue

// Appending the newly created h1 element to the body of the document
document.querySelector("body").appendChild(h1New);

// Creating an img element dynamically
let img = document.createElement("img");
img.src =
  "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"; // Setting the image source
img.style.margin = "0.5em"; // Adding margin to the image

// Appending the newly created img element to the body of the document
document.querySelector("body").appendChild(img);

// Removing the newly added h1 element from the body (removes 'hey')
document.querySelector("body").removeChild(h1New);

// Removing the image element from the body
document.querySelector("body").removeChild(img);

/*
Jab bhi aap kisi element par kisi bhi prakar ka koi action karte ho toh vaha par event automatically raise hota hai,
agar aapne koi eventListener nhi banaya hai toh vo event IGNORE kardiya jata hai,
par agar aapne listener banaya hai uss event par toh vo event IGNORE nhi kiya jayega,
balki uska listener chalega.

Example of handling user interactions with events using addEventListener:

Let's add a click event listener on the newly created h1 element (h1New):
*/
h1New.addEventListener("click", function () {
  // Alert the user when they click on the h1New element
  alert("You clicked the 'hey' heading!");
});

// 5. Add another event to change background color of the body when the image is clicked:
img.addEventListener("click", function () {
  // Changing the background color of the body to a random color on image click
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
});

// 6. Add a mouseover event listener on the h1 element (hone) to change its text:
h1.addEventListener("mouseover", function () {
  h1.textContent = "You are hovering over me!";
});

// 7. Add a mouseout event listener on the h1 element (hone) to revert the text back:
h1.addEventListener("mouseout", function () {
  h1.textContent = "Hey, Welcome to the DOM Manipulation Tutorial!";
});

// 8. Add a double click event listener to the body that will alert the user:
document.body.addEventListener("dblclick", function () {
  alert("You double-clicked anywhere on the body!");
});

// 9. Add a keydown event listener to the document that will alert the user when they press any key:
document.addEventListener("keydown", function (event) {
  alert(`You pressed the key: ${event.key}`);
});

// 10. Add a focus event listener to the name input field:
let nameInput = document.querySelector("#name");
nameInput.addEventListener("focus", function () {
  nameInput.style.borderColor = "green"; // Changes the border color when the input is focused
});
