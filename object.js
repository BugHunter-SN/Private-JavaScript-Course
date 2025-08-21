// properties and methods
// 👉 Properties = Data/attributes (like variables inside an object or class).
// 👉 Methods = Functions that belong to an object/class and act on its data.

// Objects store data in key-value pairs, representing real-world entities.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "14 Sstreet",
    city: "Monrovia",
    state: "Montserrado",
  },
  sayHello: function(){
    console.log("Hello, I'm John")
},
isMarried: true,
};
// object destructuring ES6 - ES2025

// const { firstName, hobbies, address} = person;

console.log(person.address.city)


// Dot notation to get the following
 // "John"
 // "movies" get the first movie
 // "Montserrado"

// Bracket notation to get firstName
 // "John"

// Adding new properties
// add new properties ex: email. and phone
// console.log(person)

// create a new object called universities, and add 3 different universities, with the following properties
// name, location, numberOfStudents, courses in an array of atleast 3, and add any method of your choice


const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false,
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: false,
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true,
  },
];


// console.log(todos[2].text)

// for (let todo of todos) {
//   console.log(todo.text);
// }

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}


// for(let i =0; i<= 20; i++){
//     console.log(i)
// }
// Accessing object in array
// console.log(todos[1].text); // "Dinner with wife"

// Convert to JSON string
// console.log(JSON.stringify(todos));