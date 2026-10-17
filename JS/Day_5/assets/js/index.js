// TASK 1 – SIMPLE CALCULATOR
let a = 20;
let b = 10;

console.log("TASK 1 – SIMPLE CALCULATOR");
console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("Multiplication:", a*b);
console.log("Division:", a/b);
console.log("Remainder:", a%b);

// TASK 2 – EVEN OR ODD
let number = 15;

if(number%2==0){
    console.log("TASK 2 – EVEN OR ODD");
    console.log("The number is even.");
} else {
    console.log("TASK 2 – EVEN OR ODD");
    console.log("The number is odd.");
}

// TASK 3 – POSITIVE, NEGATIVE OR ZERO
let num = -5;

console.log("TASK 3 – POSITIVE, NEGATIVE OR ZERO");
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// TASK 4 – VOTING ELIGIBILITY
let age = 20;

console.log("TASK 4 – VOTING ELIGIBILITY");

if(age>=18){
    console.log("Eligible to Vote");   
}else{
    console.log("Not Eligible to Vote");
    
}

// TASK 5 – LARGEST OF TWO NUMBERS
let A= 40;
let B= 25;

console.log("TASK 5 – LARGEST OF TWO NUMBERS");
if(A>B){
    console.log(A+" is largest Number");    
}else if(B>A){
    console.log(B+" is largest Number");    
}else{
    console.log("Both numbers are equal");    
}

// TASK 6 – STUDENT GRADE
let mark = 78;

console.log("TASK 6 – STUDENT GRADE");
if(mark>=90){
    console.log("Grade A");
}else if(mark>=75){
     console.log("Grade B");
}else if(mark>=50){
     console.log("Grade C");
}else{
    console.log("Fail");
}

// TASK 7 – PRINT 1 TO 20
console.log("TASK 7 – PRINT 1 TO 20");

for(let a=1;a<=20;a++){
    console.log(a);   
}

// TASK 8 – PRINT EVEN NUMBERS
console.log("TASK 8 – PRINT EVEN NUMBERS");

for(let even=2;even<=50;even++){
    if(even%2==0){
        console.log("Even numbers from 1 to 50:",even);  
    }
}

// TASK 9 – MULTIPLICATION TABLE
let tablenumber=5;
console.log("TASK 9 – MULTIPLICATION TABLE");

for(let table=1;table<=10;table++){
    console.log(tablenumber+" x "+table+" = " +(tablenumber*table));    
}

// TASK 10 – SUM OF 1 TO 10
let total = 0;
console.log("TASK 10 – SUM OF 1 TO 10");
for (let i=1;i<=10;i++) {
    total=total+i;
}
console.log("Total =",total);

