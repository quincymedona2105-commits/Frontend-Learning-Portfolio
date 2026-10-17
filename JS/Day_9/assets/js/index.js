
// TASK 5 – CALLBACK CALCULATOR
console.log("Task 5 – Callback Calculator");
function add(a, b) {
    console.log(a + b);
}
function subtract(a, b) {
    console.log(a - b);
}
function calculate(a, b, callback) {
    callback(a, b);
}
calculate(20, 10, add);
calculate(20, 10, subtract);

// TASK 4 – CLOSURE COUNTER
console.log("Task 4 – Closure Counter");
function createCounter() {
    let count = 0;

    function counter() {
        count++;
        console.log(count);
    }

    return counter;
}

let myCounter = createCounter();
myCounter();
myCounter();
myCounter();


// TASK 3 – HOISTING
console.log("Task 3 – Hoisting");
greet();

function greet() {
    console.log("Welcome to JavaScript");
}

console.log(age);
let age = 25;


// TASK 1 – GLOBAL AND FUNCTION SCOPE
console.log("Task 1 – Global and Function Scope");
let company = "ABC Technologies";

const Employee = () => {
    let employee = "Arun";

    console.log(company);
    console.log(employee);
}

Employee();

console.log(employee);

// TASK 2 – BLOCK SCOPE
console.log("Task 2 – Block Scope");
if (true) {
    let age = 25;
    const city = "Chennai";

    console.log(age);
    console.log(city);
}

console.log(age);
console.log(city);



