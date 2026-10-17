// TASK 1 – FRUIT ARRAY
console.log("TASK 1 – FRUIT ARRAY");
let fruits = ["apple", "banana", "orange", "grape"];
console.log("Complete array", fruits);
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// TASK 2 – UPDATE COLORS
console.log("TASK 2 – UPDATE COLORS");
let colors = ["Red", "Blue", "Green", "Yellow"];
console.log("Original color:", colors)
colors[[1]]= "Black"
console.log("Updated colors array:", colors);

// TASK 3 – LOOP STUDENT NAMES
console.log("TASK 3 – LOOP STUDENT NAMES");
let students=["Arun", "Kumar", "Priya", "Ravi", "Divya"];
for(let a=0;a<=students.length-1;a++){
    console.log(students[a]);
}

// TASK 5 – ARRAY MULTIPLICATION
console.log("TASK 5 – ARRAY MULTIPLICATION");
let numbers=[2, 4, 6, 8, 10];
for(let a=0;a<=numbers.length-1;a++){
    console.log(numbers[a] * 2);
}

// TASK 6 – STUDENT OBJECT
console.log("TASK 6 – STUDENT OBJECT");
let student={name:"Arun",age:20,course:"Full Stack",city:"Chennai"};
console.log("Student Name:", student.name);
console.log("Student Course:", student.course);

// TASK 7 – UPDATE EMPLOYEE
console.log("TASK 7 – UPDATE EMPLOYEE");
let employee={"name": "Arun", "salary": 25000, "role": "Developer"};
console.log("Original employee object:", employee);
employee.salary = 30000;
console.log("Updated employee object:", employee);

// TASK 8 – ADD NEW PROPERTY
console.log("TASK 8 – ADD NEW PROPERTY");
let product={name:"Laptop",price:50000};
console.log("Original product object:", product);
product.brand="Dell";
console.log("Updated product object:", product);

// TASK 10 – ARRAY OF OBJECTS
console.log("TASK 10 – ARRAY OF OBJECTS");
let Student=[{ name:"Arun",mark:80},{name:"Priya",mark:90},{name:"Kumar",mark:75}];
for(let a=0;a<=Student.length-1;a++){
    console.log(Student[a].name,Student[a].mark);
}