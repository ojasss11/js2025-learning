// DOM (Document Object Model) Basics

/*
--- DOM Overview ---
The DOM is the interface between HTML and JavaScript, allowing us to:
1. Access elements (e.g., document.querySelector()).
2. Modify elements' content (e.g., innerHTML, textContent).
3. Style elements dynamically (e.g., style, classList).
4. Create and remove elements (e.g., createElement(), appendChild(), removeChild()).
5. Handle user interactions with events (e.g., addEventListener()).

--- Example Use Case ---
Imagine you want to hide a div when a button is clicked. HTML alone can't handle such interactivity. 
Using JavaScript with DOM manipulation, we can make such changes dynamically.

--- DOM Manipulation ---
Manipulating or changing elements in the document is called DOM manipulation.
For example, clicking a button to start a download or update content.

--- General Process ---
1. Select an element: Use `document.querySelector()` or similar methods.
2. Make changes: Update text, styles, or structure.
3. Trigger changes: Use events like `click`, `input`, etc.
*/

/* --- Selecting Elements ---
Use these methods for selection:
1. document.getElementById()
2. document.getElementsByClassName()
3. document.getElementsByTagName()
4. document.querySelector() (more versatile, allows CSS selectors)
*/

// Select elements and save them to variables
let btn = document.getElementById("button"); // Button element
let abcd = document.querySelector(".abcd"); // Element with class 'abcd'
let idAbcd = document.querySelector("#abcd"); // Element with ID 'abcd'
let h3Tag = document.querySelector("h3"); // First <h3> tag

// Select specific elements based on ID and class
let firsth3 = document.querySelector("#firsth3"); // <h3> with ID 'firsth3'
let secondh3 = document.querySelector(".secondimg"); // <h3> with class 'secondimg'

let firstImage = document.querySelector("#calender"); // Image with ID 'calender'
let secondImage = document.querySelector(".peacock"); // Image with class 'peacock'

// Note: When multiple elements share the same tag (e.g., <h3>), only the first match is selected.

// --- Modifying Elements ---
// Update textContent or innerHTML of elements

let btn2 = document.querySelector("#btn2");
btn2.textContent = "Starting..."; // Update button text

let firsth1 = document.querySelector("#first-h1");
firsth1.textContent += " OJAS!"; // Append text to existing content

let para = document.querySelector("#first-para"); // Select paragraph (not modified here)

let secondh1 = document.querySelector("#second-h1");
secondh1.innerHTML = "<i>Helllloooooooooo</i>"; // Add italicized text with HTML

// --- Styling and Classes ---
// Styling elements directly using JavaScript
firsth1.style.fontFamily = "cursive"; // Example of applying font style
firsth1.style.color = "#ff5733"; // Change text color

// Add or remove classes
firsth3.classList.add("highlight"); // Add a new class
firsth3.classList.remove("highlight"); // Remove a class

// Toggle class on a button click (dynamic style change)
btn.addEventListener("click", () => {
  secondh3.classList.toggle("highlight"); // Toggle highlight class
});

// --- Event Listeners ---
// Add an event listener to hide the first image
document.getElementById("hideImage").addEventListener("click", function () {
  if (firstImage.style.display === "none") {
    firstImage.style.display = "block"; // Show image again
  } else {
    firstImage.style.display = "none"; // Hide the image
  }
});

// --- Creating and Removing Elements ---
// Create a new paragraph dynamically and append it to the body
let newPara = document.createElement("p");
newPara.textContent = "This is a dynamically added paragraph.";
document.body.appendChild(newPara);

// Remove the second image when a specific button is clicked
let removeImageButton = document.createElement("button");
removeImageButton.textContent = "Remove Second Image";
document.body.appendChild(removeImageButton);

removeImageButton.addEventListener("click", function () {
  secondImage.remove(); // Removes the second image from the DOM
});
