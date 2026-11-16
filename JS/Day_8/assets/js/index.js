// // EVEN OR ODD
// console.log("TASK 1 – EVEN OR ODD");
// function checkEvenOdd(number){
//     if(number % 2 == 0){
//         return "Even Number";
//     }
//     else{
//         return "Odd Number";
//     }
// }
// console.log(checkEvenOdd(10));

// // TASK 2 – LARGEST OF TWO NUMBERS
// console.log("TASK 2 – LARGEST OF TWO NUMBERS");
// function findLargest(a, b){
//     if(a > b){
//         return a;
//     }
//     else{
//         return b;
//     }
// }
// console.log(findLargest(25,40));

// // TASK 3 – VOTING ELIGIBILITY
// console.log("TASK 3 – VOTING ELIGIBILITY");

// function checkVote(age){
//     if(age >= 18){
//         return "Eligible to Vote";
//     }
//     else{
//         return "Not Eligible to Vote";
//     }
// }
// console.log(checkVote(20));

// // TASK 4 – SUM OF ARRAY
// console.log("TASK 4 – SUM OF ARRAY");
// function getTotal(numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         total = total + numbers[i];
//     }
//     return total;
// }

// let numbers = [10, 20, 30, 40, 50];
// console.log(getTotal(numbers));

// // TASK 5 – COUNT EVEN NUMBERS
// console.log("TASK 5 – COUNT EVEN NUMBERS");
// function countEven(number){
//     let count = 0;
//     for(let i = 0; i < number.length; i++){
//         if(number[i] % 2 == 0){
//             count++;
//         }
//     }
//     return count;
// }
// let number = [10, 15, 20, 25, 30, 35, 40];
// console.log(countEven(numbers));


// let numbers = [10, 5, 20, 2, 15];

// let smallest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// console.log("Smallest number is: " + smallest);


// let str = "madeam";

// let reverse = str.split("").reverse().join("");

// if (str === reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }


// let sentence = "I am learning JavaScript and it is fun";

// let words = sentence.split(" ");

// console.log("Number of words: " + words.length);

// for (let i = 1; i <= 50; i++) {

//     if (i % 2 === 0) {
//         console.log(i);
//     }

// }

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let i = 0;

function getNumbers() {
    if (i < 5) {
        rl.question("Enter a number: ", (answer) => {
            let num = Number(answer);
            numbers.push(num);
            i++;
            getNumbers();
        });
    } 
    else {
        let smallest = numbers[0];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }

        console.log("Smallest number: " + smallest);
        rl.close();
    }
}

getNumbers();