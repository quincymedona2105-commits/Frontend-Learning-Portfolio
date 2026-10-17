// TASK 1 – POSITIVE NUMBER
let number = 10;
if (number > 0) {
    console.log("The number is positive.");
} 

// TASK 2 – VOTING ELIGIBILITY
let age = 20;
if (age >= 18) {
    console.log("Eligible to Vote");
}else{
    console.log("Not Eligible to Vote");
}

// TASK 3 – STUDENT GRADE
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// TASK 4 – PRINT 1 TO 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// TASK 5 – PRINT EVEN NUMBERS
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
