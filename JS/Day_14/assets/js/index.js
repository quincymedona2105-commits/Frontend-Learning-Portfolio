//  Student Details:
console.log(" Task-1: Student Details:");
let studentName = "John Doe";
let age=20;
let courseCompleted = true;
console.log(" Student Name:", studentName);
console.log(" Age:", age);
console.log(" Course Completed:", courseCompleted);

// Salary Calculation:
console.log(" Task-2: Salary Calculation:");
let salary = 15000;
console.log(" Original Salary:", salary);
let newSalary=5000;
newSalary=salary+newSalary;
console.log(" Updated Salary:", newSalary);

//  Even or Odd:
console.log(" Task-3: Even or Odd:");
let number = 25;
if(number % 2 === 0){
    console.log(" The number", number, "is Even.");
}
else{
    console.log(" The number", number, "is Odd.");
}

//  Data Type Checking: 
console.log(" Task-4: Data Type Checking:");
let Name="Arun";
let Age=25;
let Boolean=true;
let Value=undefined;
console.log(" Data Type of Name:", typeof Name);
console.log(" Data Type of Age:", typeof Age);
console.log(" Data Type of Boolean:", typeof Boolean);
console.log(" Data Type of Value:", typeof Value);

//  Swap Two Numbers:
console.log(" Task-5: Swap Two Numbers:");
let a = 10;
let b = 20;
let temp;

temp=a;
a=b;
b=temp;
console.log(" After Swapping: a =",a,",b =",b);