// Select the span elements by their id
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // fixed: use getElementById instead of querySelector('area')

// Initialize variables
let area = 0; // use let because we will reassign
const PI = 3.14159; // fixed: single equal sign for assignment

// First calculation with radius = 10
let radius = 10; // fixed: use let instead of const because we will change it later
area = PI * radius * radius;

// Output values to the page using textContent
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Second calculation with radius = 20
radius = 20;
area = PI * radius * radius;

// Output updated values
radiusOutput.textContent = radius;
areaOutput.textContent = area;