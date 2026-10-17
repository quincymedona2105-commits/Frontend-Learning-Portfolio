let firstNumber = 0;
let secondNumber = 1;

for (let i = 0; i < 10; i++) {
    let result = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = result;
    console.log(result);
}

console.log("The factorial number");
let userinput=6;
let number=1;
for(let a=1;a<=userinput;a++){
    number=number*a;
}
console.log(number);
