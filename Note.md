# JavaScript Fundamentals - Complete Lesson Notes

## Table of Contents

1. [Logging Output](#logging-output)
2. [Variables Deep Dive](#variables-deep-dive)
3. [Data Types](#data-types)
4. [Operators in JavaScript](#operators-in-javascript)
5. [Strings and Template Literals](#strings-and-template-literals)
6. [Arrays](#arrays)
7. [Object Literals](#object-literals)
8. [Conditionals](#conditionals)
9. [Loops](#loops)
10. [Functions](#functions)

---

## Logging Output

JavaScript provides several methods for outputting information, each serving different purposes in development.

### Methods for Output

```javascript
// Alert - Shows popup (avoid for debugging)
alert("Hello World"); // Stops script execution, only accepts strings

// Console methods (preferred for debugging)
console.log("Hello World"); // General logging
console.error("This is an error"); // Error messages (red in console)
console.warn("This is a warning"); // Warning messages (yellow in console)
```

### Best Practices

- **Use `console.log()`** for debugging and general output
- **Avoid `alert()`** for debugging as it blocks script execution
- Use `console.error()` and `console.warn()` for specific message types

---

## Variables Deep Dive
****
JavaScript has three ways to declare variables: `var`, `let`, and `const`. Understanding their differences is crucial.

### Variable Declaration Types

```javascript
// let - can be reassigned, block-scoped
let age = 30;
age = 31; // This works

// const - cannot be reassigned, block-scoped
const name = "Brad";
// name = 'John'; // This would cause an error

// var - older way, function-scoped (avoid in modern JS)
var oldVariable = "legacy";
```

### Key Differences

| Declaration | Reassignable | Block Scoped | Hoisted |
| ----------- | ------------ | ------------ | ------- |
| `let`       | ✅ Yes        | ✅ Yes        | No      |
| `const`     | ❌ No         | ✅ Yes        | No      |
| `var`       | ✅ Yes        | ❌ No         | Yes     |

---

## Data Types

JavaScript has several primitive data types and one complex type (objects).

### Primitive Data Types

```javascript
// String
const name = "John";
const city = "Monrovia";

// Number (integers and floats)
const age = 37;
const rating = 3.5;

// Boolean
const isCool = true;
const isHot = false;

// null - intentionally empty value
const x = null;

// undefined - variable declared but not assigned
const y = undefined;
let z; // Also undefined

// Check data type
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isCool); // "boolean"
console.log(typeof x); // "object" (this is a JavaScript quirk)
console.log(typeof z); // "undefined"
```

### Important Notes

- **JavaScript is dynamically typed** - variables can hold different types
- **`null` shows as "object"** when using `typeof` (known JavaScript quirk)
- **Numbers are all "number" type** - no separate integer/float types

---

## Operators in JavaScript

Operators perform operations on variables and values.

### Arithmetic Operators

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7  (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)
```

### Assignment Operators

```javascript
let x = 10;
x += 5; // x = x + 5 (now 15)
x -= 3; // x = x - 3 (now 12)
x *= 2; // x = x * 2 (now 24)
x /= 4; // x = x / 4 (now 6)
```

### Comparison Operators

```javascript
let a = 10;
let b = "10";

// Equality (loose - converts types)
console.log(a == b); // true (10 == "10")

// Strict equality (no type conversion)
console.log(a === b); // false (10 !== "10")

// Other comparisons
console.log(a > 5); // true
console.log(a <= 10); // true
console.log(a != b); // false
console.log(a !== b); // true
```

### Logical Operators

```javascript
let isAdult = true;
let hasLicense = false;

// AND operator
console.log(isAdult && hasLicense); // false

// OR operator
console.log(isAdult || hasLicense); // true

// NOT operator
console.log(!isAdult); // false
console.log(!hasLicense); // true
```

---

## Strings and Template Literals

Strings are sequences of characters used for text data.

### String Creation and Concatenation

```javascript
const firstName = "John";
const lastName = "Doe";
const age = 30;

// Old way - concatenation
console.log("My name is " + firstName + " " + lastName + " and I am " + age);

// Modern way - template literals (preferred)
console.log(`My name is ${firstName} ${lastName} and I am ${age}`);
```

### String Methods and Properties

```javascript
const s = "Hello World";

// Properties
console.log(s.length); // 11

// Methods
console.log(s.toUpperCase()); // "HELLO WORLD"
console.log(s.toLowerCase()); // "hello world"
console.log(s.substring(0, 5)); // "Hello"
console.log(s.split(" ")); // ["Hello", "World"]
console.log(s.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
```

---

## Arrays

Arrays store multiple values in a single variable, accessed by index.

### Array Creation and Basic Operations

```javascript
// Array creation
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];

// Accessing elements (0-based indexing)
console.log(fruits[0]); // "apples"
console.log(fruits[1]); // "oranges"

// Adding elements
fruits[4] = "blueberries"; // Add at specific index
fruits.push("strawberries"); // Add to end
fruits.unshift("mangos"); // Add to beginning

// Removing elements
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning

// Array information
console.log(fruits.length); // Array length
console.log(Array.isArray(fruits)); // true
console.log(fruits.indexOf("oranges")); // Find index
```

### Array Methods Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// Check if array
console.log(Array.isArray(numbers)); // true

// Convert array to string
console.log(numbers.toString()); // "1,2,3,4,5"
console.log(numbers.join(" - ")); // "1 - 2 - 3 - 4 - 5"
```

---

## Object Literals

Objects store data in key-value pairs, representing real-world entities.

### Basic Object Structure

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};
```

### Accessing Object Properties

```javascript
// Dot notation
console.log(person.firstName); // "John"
console.log(person.hobbies[1]); // "movies"
console.log(person.address.city); // "Boston"

// Bracket notation
console.log(person["firstName"]); // "John"

// Adding new properties
person.email = "john@gmail.com";
person.phone = "555-1234";
```

### Arrays of Objects

```javascript
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

// Accessing object in array
console.log(todos[1].text); // "Dinner with wife"

// Convert to JSON string
console.log(JSON.stringify(todos));
```

---

## Conditionals

Conditionals execute different code blocks based on conditions.

### If/Else Statements

```javascript
const x = 30;

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}
```

### Switch Statements

```javascript
const color = "blue";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}
```

### Ternary Operator

```javascript
// Shorthand if/else
const color = "red";
const result = color === "red" ? 10 : 20;
console.log(result); // 10

// Can be used for simple conditions
const age = 18;
const status = age >= 18 ? "adult" : "minor";
```

---

## Loops

Loops execute code repeatedly based on conditions.

### For Loop

```javascript
// Basic for loop
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// Looping through arrays
const todos = ["Task 1", "Task 2", "Task 3"];

for (let i = 0; i < todos.length; i++) {
  console.log(`Todo ${i + 1}: ${todos[i]}`);
}
```

### While Loop

```javascript
let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}
```

### For...of Loop (Modern)

```javascript
const todos = ["Task 1", "Task 2", "Task 3"];

// Loop through array values
for (let todo of todos) {
  console.log(todo);
}
```

### Array Methods for Looping

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach(function (number, index) {
  console.log(`Index ${index}: ${number}`);
});

// map - create new array with transformed values
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - create new array with elements that pass test
const evens = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evens); // [2, 4]
```

---

## Functions

Functions are reusable blocks of code that perform specific tasks.

### Function Declaration

```javascript
function greet(greeting = "Hello", name = "World") {
  return `${greeting}, ${name}!`;
}

// Calling the function
console.log(greet()); // "Hello, World!"
console.log(greet("Hi", "Brad")); // "Hi, Brad!"
console.log(greet("Good morning")); // "Good morning, World!"
```

### Function with Conditional Logic

```javascript
function greet(greeting = "Hello", name) {
  if (!name) {
    return greeting;
  } else {
    return `${greeting} ${name}`;
  }
}

console.log(greet("Hi")); // "Hi"
console.log(greet("Hi", "John")); // "Hi John"
```

### Arrow Functions (ES6)

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const add = (a, b) => {
  return a + b;
};

// Short arrow function (single expression)
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = (x) => x * x;

// No parameters
const sayHello = () => "Hello World!";
```

---

## Assignment: Variable Naming and Operators Practice

**Task 1: Variable Naming**
Create variables using different naming conventions:

- `camelCase`: Create variables for a user's first name, last name, and email address
- `snake_case`: Create variables for monthly salary and yearly bonus
- `PascalCase`: Create a function name for calculating tax

**Task 2: Operators Practice**
Create a calculator that:

1. Takes two numbers
2. Performs all arithmetic operations (+, -, \*, /, %)
3. Compares the numbers using comparison operators
4. Uses logical operators to check if both numbers are positive

**Task 3: Data Types**
Create variables of each data type and use `typeof` to verify their types. Include examples of `undefined` vs `null`.

---

## Key Takeaways

1. **Use `let` and `const`** instead of `var` in modern JavaScript
2. **Template literals** (`\`Hello ${name}\``) are preferred over string concatenation
3. **Use `===` for strict equality** comparison instead of `==`
4. **Arrays are zero-indexed** - first element is at index 0
5. **Objects use key-value pairs** - access with dot notation or brackets
6. **Functions should have default parameters** when appropriate
7. **Arrow functions** provide cleaner syntax for simple functions
