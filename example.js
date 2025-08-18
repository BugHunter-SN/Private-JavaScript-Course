const fruits = ["apples", "oranges", "pears", "grapes", false, undefined, 20];
const newFruits = ["Coconut", "PineApple", "Cassava"]
let testingArray = false;

// print to the console from apple to grapes using indexing
// print the last item to the console only by not using it original index
// console.log("print last array: ",fruits[-1])
// validate the fruit array to know if it's an array.expected result must be true
console.log("if array is true: ",Array.isArray(testingArray))
// combine the two array into a single array
const combineArray = fruits.concat(newFruits)
console.log(combineArray)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])