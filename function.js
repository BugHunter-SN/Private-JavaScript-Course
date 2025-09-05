// greeting  = "Hello";
// userName = "world";

// function greet(greeting = "Hello", userName = "Peter"){
//     return greeting, userName
// }

// const result = greet('Hi', 'John')
// const result1 = greet('Good Morning', 'James')
// const result2 = greet('Hi', 'Esther')
// console.log(result, result1, result2)

function add(x, y){
    return x + y
}
const sum = add(2,3)
// console.log(sum)

function multiply(x, y){
    return x * y 
}
const product = multiply(5,3)
// console.log(product)





const greetings = (greeting = "Hello", name) => {
  if (!name) {
    return greeting;
  } else {
    return `${greeting} ${name}`;
  }
}

console.log(greetings("Hi")); // "Hi"
console.log(greetings("Hi", "John")); // "Hi John"


let adding = (x, y) =>  x + y;
console.log(adding(3,3))
console.log(adding(10,3))
console.log(adding(10,30))
