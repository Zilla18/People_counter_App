// Initialize the count as 0
// Listen for click on the increment button
// Increment the count variable when the button is clicked
// Change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerHTML = count;
}
increment();
