# JavaScript Practice Exercises - Progressive Learning

**Version:** 1.0  
**Created:** July 2025  
**Last Updated:** July 2025  
**Cohorts Used:** 2025-1, 2025-2, etc.  
**Estimated Timeline:** 12-15 weeks  

## Revision History
- v1.0 (July 2025): Initial comprehensive exercise set
- v1.1 (TBD): Updates based on first cohort feedback




## **Exercise** Set 1: Variables and Data Types (Beginner)

### Exercise 1.1: Variable Declaration Practice
Create a JavaScript file and complete the following tasks:

```java
// TODO: Declare variables using appropriate naming conventions

// 1. Create variables for a student using camelCase:
//    - firstName (string)
//    - lastName (string) 
//    - studentAge (number)
//    - isEnrolled (boolean)

// 2. Create variables for course info using snake_case:
//    - course_name (string)
//    - course_duration (number)
//    - max_students (number)

// 3. Create constants for university info:
//    - UNIVERSITY_NAME (string)
//    - FOUNDED_YEAR (number)

// 4. Practice undefined and null:
//    - Create a variable 'grade' that is undefined
//    - Create a variable 'previousScore' that is null

// 5. Use console.log to display all variables and their types
```

**Expected Output Example:**
```
Student: John Doe, Age: 20, Enrolled: true
Course: Web Development, Duration: 12 weeks
University: Tech University, Founded: 1985
Grade: undefined (type: undefined)
Previous Score: null (type: object)
```

### Exercise 1.2: Type Checking Challenge
```javascript
// Given these variables, predict and then verify the typeof results:

let mystery1 = "25";
let mystery2 = 25;
let mystery3 = 25.5;
let mystery4 = true;
let mystery5 = null;
let mystery6;
let mystery7 = "true";

// Write code to:
// 1. Console log each variable and its type
// 2. Create a summary object showing your predictions vs actual results
```

---

## Exercise Set 2: Operators (Beginner to Intermediate)

### Exercise 2.1: Calculator Functions
Create a simple calculator with the following requirements:

```javascript
// Create a calculator object with methods for:
const calculator = {
    // TODO: Implement these methods
    
    add: function(a, b) {
        // Return sum and log the operation
    },
    
    subtract: function(a, b) {
        // Return difference and log the operation
    },
    
    multiply: function(a, b) {
        // Return product and log the operation
    },
    
    divide: function(a, b) {
        // Return quotient, handle division by zero
    },
    
    modulus: function(a, b) {
        // Return remainder
    },
    
    compare: function(a, b) {
        // Return object with all comparison results
        // {equal: bool, strictEqual: bool, greater: bool, etc.}
    }
};

// Test your calculator:
console.log(calculator.add(10, 5));
console.log(calculator.divide(10, 0)); // Should handle error
console.log(calculator.compare(10, "10"));
```

### Exercise 2.2: Grade Evaluator
```javascript
// Create a function that evaluates student performance

function evaluateStudent(score, attendance, hasSubmittedProject) {
    // TODO: Implement logic using logical operators
    
    // Rules:
    // - Pass: score >= 60 AND attendance >= 75% AND hasSubmittedProject
    // - Warning: score >= 50 AND attendance >= 60% 
    // - Fail: anything else
    
    // Return object: {status: string, message: string, canRetake: boolean}
}

// Test cases:
console.log(evaluateStudent(85, 80, true));  // Should pass
console.log(evaluateStudent(75, 60, false)); // Should be warning
console.log(evaluateStudent(45, 50, false)); // Should fail
```

---

## Exercise Set 3: Strings and Template Literals (Intermediate)

### Exercise 3.1: Student Report Generator
```javascript
// Create a function that generates formatted student reports

function generateStudentReport(student) {
    // student object will have: firstName, lastName, age, grade, subjects[]
    
    // TODO: Use template literals to create a formatted report
    // Include:
    // - Header with student name in uppercase
    // - Age and grade information
    // - List of subjects (use array methods)
    // - Character count of full name
    // - Initials (first letter of first and last name)
    
    // Return the formatted string
}

// Test data:
const student1 = {
    firstName: "alice",
    lastName: "johnson", 
    age: 20,
    grade: "A",
    subjects: ["JavaScript", "HTML", "CSS", "React"]
};

console.log(generateStudentReport(student1));
```

**Expected Output:**
```
=== STUDENT REPORT ===
Name: ALICE JOHNSON (Initials: A.J.)
Age: 20 years old
Grade: A
Subjects: JavaScript, HTML, CSS, React
Full name character count: 13
```

### Exercise 3.2: Text Processing Challenge
```javascript
// Create functions to process course descriptions

const courseDescription = "  JavaScript is a powerful programming language used for web development. It allows developers to create interactive websites.  ";

// TODO: Create these functions:

function cleanText(text) {
    // Remove extra spaces, convert to proper case
}

function getWordStats(text) {
    // Return object with: wordCount, characterCount, sentenceCount
}

function extractKeywords(text, keywords) {
    // Return array of found keywords (case insensitive)
}

function createSlug(text) {
    // Convert "JavaScript Course" to "javascript-course"
}

// Test your functions
```

---

## Exercise Set 4: Arrays (Intermediate)

### Exercise 4.1: Student Management System
```javascript
// Create a student management system using arrays

let students = [
    {id: 1, name: "Alice", grades: [85, 92, 78], status: "active"},
    {id: 2, name: "Bob", grades: [72, 85, 90], status: "active"}, 
    {id: 3, name: "Charlie", grades: [95, 88, 92], status: "inactive"},
    {id: 4, name: "Diana", grades: [88, 85, 89], status: "active"}
];

// TODO: Implement these functions:

function addStudent(students, newStudent) {
    // Add new student with auto-incremented ID
}

function removeStudent(students, studentId) {
    // Remove student by ID, return updated array
}

function getActiveStudents(students) {
    // Return array of only active students
}

function calculateAverageGrade(student) {
    // Calculate average of student's grades
}

function getTopPerformers(students, limit = 3) {
    // Return top N students by average grade
}

function getStudentStats(students) {
    // Return object with: totalStudents, activeStudents, averageClassGrade
}

// Test all functions
console.log(getTopPerformers(students, 2));
console.log(getStudentStats(students));
```

### Exercise 4.2: Array Methods Mastery
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words = ["javascript", "html", "css", "react", "node"];

// TODO: Use array methods to solve these challenges:

// 1. Create array of even numbers
const evenNumbers = // your code here

// 2. Create array of numbers multiplied by their index
const indexMultiplied = // your code here

// 3. Find sum of all numbers
const sum = // your code here

// 4. Create array of word lengths
const wordLengths = // your code here

// 5. Find longest word
const longestWord = // your code here

// 6. Create array of uppercase words that are longer than 4 characters
const filteredWords = // your code here

console.log("Results:", {evenNumbers, indexMultiplied, sum, wordLengths, longestWord, filteredWords});
```

---

## Exercise Set 5: Objects (Intermediate to Advanced)

### Exercise 5.1: University Course System
```javascript
// Create a comprehensive course management system

const university = {
    name: "Tech University",
    courses: [],
    
    // TODO: Implement these methods:
    
    addCourse: function(courseInfo) {
        // Add course with validation
        // courseInfo: {code, name, credits, instructor, maxStudents}
    },
    
    enrollStudent: function(courseCode, studentInfo) {
        // Add student to course if space available
    },
    
    getCourseByCode: function(code) {
        // Return course object or null
    },
    
    getStudentCourses: function(studentId) {
        // Return array of courses student is enrolled in
    },
    
    generateReport: function() {
        // Return object with university statistics
    }
};

// Test data:
const courses = [
    {code: "CS101", name: "Intro to Programming", credits: 3, instructor: "Dr. Smith", maxStudents: 30},
    {code: "WEB201", name: "Web Development", credits: 4, instructor: "Prof. Johnson", maxStudents: 25}
];

const students = [
    {id: 1, name: "Alice", email: "alice@email.com"},
    {id: 2, name: "Bob", email: "bob@email.com"}
];

// TODO: Test your implementation
```

### Exercise 5.2: JSON Data Processing
```javascript
// Process course enrollment data from JSON

const enrollmentData = `[
    {"studentId": 1, "courseCode": "CS101", "semester": "Fall2024", "grade": null},
    {"studentId": 1, "courseCode": "WEB201", "semester": "Fall2024", "grade": "A"},
    {"studentId": 2, "courseCode": "CS101", "semester": "Fall2024", "grade": "B+"},
    {"studentId": 3, "courseCode": "WEB201", "semester": "Fall2024", "grade": null}
]`;

// TODO: Create functions to:

function parseEnrollmentData(jsonString) {
    // Parse JSON and return processed data
}

function getStudentsByGrade(data, grade) {
    // Return students with specific grade
}

function getPendingGrades(data) {
    // Return enrollments where grade is null
}

function generateGradeReport(data) {
    // Return summary of grade distribution
}
```

---

## Exercise Set 6: Control Structures (Advanced)

### Exercise 6.1: Grade Processing System
```javascript
// Create a comprehensive grade processing system

function processGrades(students) {
    // Input: array of student objects with grades array
    // TODO: Process each student and return enhanced data
    
    students.forEach(student => {
        // Calculate letter grade based on average
        // Add GPA calculation
        // Determine academic status (Dean's List, Probation, etc.)
        // Add recommendations
    });
    
    return students;
}

function getGradeDistribution(students) {
    // Return object showing count of each letter grade
}

function identifyAtRiskStudents(students) {
    // Return students who need academic support
}

// Test with sample data
const testStudents = [
    {name: "Alice", grades: [85, 92, 78, 88, 95]},
    {name: "Bob", grades: [72, 65, 70, 68, 75]},
    {name: "Charlie", grades: [95, 98, 92, 96, 94]}
];
```

### Exercise 6.2: Course Scheduler
```javascript
// Create a course scheduling system with conflict detection

const timeSlots = [
    "08:00-09:30", "09:45-11:15", "11:30-13:00", 
    "14:00-15:30", "15:45-17:15"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function createSchedule(courses, constraints) {
    // TODO: Create optimal schedule avoiding conflicts
    // Consider: instructor availability, room capacity, prerequisites
    
    const schedule = {};
    
    // Your scheduling logic here
    
    return schedule;
}

function detectConflicts(schedule) {
    // Return array of scheduling conflicts
}

function optimizeSchedule(schedule) {
    // Suggest improvements to reduce gaps
}
```

---

## Exercise Set 7: Functions and Advanced Concepts (Advanced)

### Exercise 7.1: Higher-Order Functions Challenge
```javascript
// Create a data processing pipeline using higher-order functions

const studentData = [
    {name: "Alice", age: 20, grades: [85, 92, 78], major: "CS"},
    {name: "Bob", age: 19, grades: [72, 85, 90], major: "IT"},
    {name: "Charlie", age: 21, grades: [95, 88, 92], major: "CS"},
    {name: "Diana", age: 20, grades: [88, 85, 89], major: "IT"}
];

// TODO: Create these higher-order functions:

const pipeline = {
    filter: function(predicate) {
        // Return new pipeline with filtered data
    },
    
    map: function(transformer) {
        // Return new pipeline with transformed data
    },
    
    sort: function(compareFn) {
        // Return new pipeline with sorted data
    },
    
    execute: function(data) {
        // Execute the pipeline and return results
    }
};

// Example usage:
// const result = pipeline
//     .filter(student => student.major === "CS")
//     .map(student => ({...student, average: calculateAverage(student.grades)}))
//     .sort((a, b) => b.average - a.average)
//     .execute(studentData);
```

### Exercise 7.2: Function Factory
```javascript
// Create functions that generate other functions

function createValidator(rules) {
    // Return a function that validates objects based on rules
    // rules: {field: {required: bool, type: string, min: number, max: number}}
}

function createFormatter(template) {
    // Return a function that formats objects using template
    // template: "Hello {name}, you are {age} years old"
}

function createCalculator(operations) {
    // Return object with calculator methods based on operations array
}

// Test your function factories:
const studentValidator = createValidator({
    name: {required: true, type: "string", min: 2},
    age: {required: true, type: "number", min: 16, max: 100},
    email: {required: true, type: "string"}
});

const reportFormatter = createFormatter("Student: {name}, Grade: {grade}, Status: {status}");
```

---

## Challenge Projects

### Project 1: University Management System
Combine all concepts to build a complete university management system:
- Student enrollment
- Course management
- Grade tracking
- Report generation
- Data validation

### Project 2: Interactive Grade Calculator
Create an interactive application that:
- Takes user input for assignments
- Calculates weighted grades
- Provides grade predictions
- Exports reports

---

## Self-Assessment Checklist

After completing these exercises, you should be able to:

- [ ] Declare variables using appropriate naming conventions
- [ ] Use all JavaScript operators correctly
- [ ] Manipulate strings and use template literals
- [ ] Work with arrays and use array methods
- [ ] Create and manipulate objects
- [ ] Use conditional statements and loops effectively
- [ ] Write and call functions with parameters
- [ ] Understand scope and variable lifetime
- [ ] Process JSON data
- [ ] Use higher-order functions
- [ ] Create reusable, modular code

---

## Bonus Challenges

### 1. Performance Optimization
Compare different approaches to solving the same problem and measure performance.

### 2. Error Handling
Add comprehensive error handling to all your functions.

### 3. Code Documentation
Document your code using JSDoc comments.

### 4. Testing
Write test cases for your functions to ensure they work correctly.

---

*Remember: The best way to learn programming is by doing. Don't just read these exercises - code them! Start with the basics and gradually work your way up to the advanced challenges.*