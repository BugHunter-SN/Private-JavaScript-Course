// Array creation
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears", "grapes", false, undefined];

console.log(fruits)
// fifo --- lafo
// Accessing elements (0-based indexing)
console.log(fruits[0]); // "apples"
console.log(fruits[1]); // "oranges"

// Adding elements
fruits[4] = "blueberries"; // Add at specific index
fruits[4] = "mango"; // Add at specific index

console.log(fruits)

fruits.push("strawberries","plum", "coconut"); // Add to end
console.log(fruits)
console.log(numbers)
numbers.push(6, 7, 8)
console.log(numbers)
fruits.unshift(true, 10, undefined, null); // Add to beginning
console.log(fruits)
// Removing elements
// fruits.pop(); // Remove from end
// fruits.shift(); // Remove from beginning

// Array information
console.log(fruits.length); // Array length
// console.log(Array.isArray(fruits)); // true
// console.log(fruits.indexOf("oranges")); // Find index