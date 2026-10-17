// TASK 1 – LET
console.log("TASK 1 – LET");
let salary = 20000;
console.log("Initial salary: " + salary);
salary = 25000;
console.log("Updated salary: " + salary);

// TASK 2 – CONST
console.log("TASK 2 – CONST");
const country = " India";
console.log("My Country is" + country);

// TASK 3 – TEMPLATE LITERAL
console.log("TASK 3 – TEMPLATE LITERAL");
let name = "Arun";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// TASK 4 – TEMPLATE LITERAL CALCULATION
console.log("TASK 4 – TEMPLATE LITERAL CALCULATION");
let price = 500;
let quantity = 4;
console.log(`Total cost is ${price * quantity}`);

// TASK 5 – DEFAULT PARAMETER
console.log("TASK 5 – DEFAULT PARAMETER");
function greet(name = "Guest") {
    console.log(`Welcome ${name}`);
}
greet("Arun");
greet();

// TASK 6 – ARRAY DESTRUCTURING
console.log("TASK 6 – ARRAY DESTRUCTURING");
const colors = ["Red","Green","Blue"];
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);

// TASK 7 – OBJECT DESTRUCTURING
console.log("TASK 7 – OBJECT DESTRUCTURING");
const student = {
    Sname: "Arun",
    Sage: 20,
    city: "Chennai"
};

const { Sname, Sage, city } = student;
console.log(Sname);
console.log(Sage);
console.log(city);

// TASK 8 – SPREAD
console.log("TASK 8 – SPREAD");
const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50];
console.log(newNumbers);

// TASK 9 – REST
console.log("TASK 9 – REST");
function showNumbers(...numbers) {
    console.log(numbers);
}
showNumbers(10, 20, 30, 40);

// TASK 10 – ARROW FUNCTION
console.log("TASK 10 – ARROW FUNCTION");
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));