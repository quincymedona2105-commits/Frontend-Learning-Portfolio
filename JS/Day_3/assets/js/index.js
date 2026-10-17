// TASK 1 – SHOPPING BILL

let Shirt_Price = 1200;
let Quantity = 3;
let Delivery_Charge = 100;
let Total_Price = (Shirt_Price * Quantity);
let Total_Amount = (Total_Price + Delivery_Charge);

console.log("TASK 1 – SHOPPING BILL");
console.log("Total Price: " + Total_Price);
console.log("Total Amount: " + Total_Amount);

// TASK 2 – EMPLOYEE SALARY
let Employee_Salary = 30000;
let Bonus = 5000;
let Tax = 2000;

let salary = Employee_Salary;
salary += Bonus;
salary -= Tax;
console.log("TASK 2 – EMPLOYEE SALARY");
console.log("Final Salary: " + salary);

// TASK 3 – BANK ACCOUNT
let Starting_Balance = 20000;
let Deposit = 5000;
let Withdrawal = 3000;

let balance = Starting_Balance;
balance += Deposit;
balance -= Withdrawal;

console.log("TASK 3");
console.log("Final Balance =", balance);

// TASK 4 – STUDENT MARKS
let Tamil = 80;
let English = 75;
let Maths = 90;
let Science = 85;
let Computer = 95;

let Total_Marks = (Tamil + English + Maths + Science + Computer);
let Average_Marks = (Total_Marks / 5);

console.log("TASK 4 – STUDENT MARKS");
console.log("Total Marks: " + Total_Marks);
console.log("Average Marks: " + Average_Marks);

// TASK 5 – NUMBER OPERATIONS

let number = 20;

number += 10;
number *= 2;
number -= 20;
number /= 4;
number %= 3;

console.log("TASK 5");
console.log("Final Value =", number);