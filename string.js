// const firstName = "John";
// const lastName = "Doe";
// const age = 30;
// // My name is John Doe and I am 30 years of age.

// // old way - string concatenation
// console.log("My name is " + firstName + " " + lastName + " "+ "and I am " + age + " years of age")


// // modern way -  template literals ES2015/ES6
// console.log(`My name is ${firstName} ${lastName} and I am $`{age} years of age`)

const fullName = "Samuel Nimely";

// Properties
console.log(fullName.length); // 11

// Methods
console.log(fullName.substring(0,3));
console.log(fullName.toUpperCase()); // "SAMUEL NIMELY"
console.log(fullName.toLowerCase()); // "samuel nimely"
console.log(fullName.split(" ")); // ['Samuel', 'Nimely']
console.log(fullName.split("")); //  ['S', 'a', 'm', 'u', 'e', 'l', ' ', 'N', 'i', 'm', 'e', 'l', 'y']
// console.log(fullName.indexOf("N"))
console.log(fullName.length -2) // 11
