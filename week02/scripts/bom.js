// Select the input field element by its id
const input = document.querySelector('#favchap');

// Select the first button element in the document
const button = document.querySelector('button');

// Select the unordered list element by its id
const list = document.querySelector('#list');

// --- Example of creating and appending elements ---
// Normally this will be inside an event listener, but here we show the basic DOM manipulation steps

// Create a new list item element
const li = document.createElement('li');

// Set the text content of the list item to the value entered in the input field
li.textContent = input.value;

// Create a delete button element
const deleteButton = document.createElement('button');

// Set the text content of the delete button to a cross symbol
deleteButton.textContent = '❌';

// Add an aria-label attribute for accessibility (screen readers)
deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

// Append the delete button to the list item
li.append(deleteButton);

// Append the list item to the unordered list
list.append(li);

