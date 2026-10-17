console.log("Task 1 — Closure (Counter Application)")
let count = 0;
const createCounter = () => {
    return () => {
        count += 10;
        console.log(count);
    };
};
const counter = createCounter();

counter();
counter();
counter();
counter();
counter();

console.log("Task 2 — Callback Function (Salary Calculation)")
const calculateSalary = (salary, callback) => {
    callback(salary);
};
const addBonus = (salary) => {
    console.log("Original Salary:", salary);
    console.log("Salary After Bonus:", salary + 5000);
};
const deductSalary = (salary) => {
    console.log("Salary After Deduction:", salary - 2000);
};
calculateSalary(20000, addBonus);
calculateSalary(20000, deductSalary);