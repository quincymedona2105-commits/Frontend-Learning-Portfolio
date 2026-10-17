// TASK 1 – DOUBLE ALL NUMBERS
console.log('TASK 1 – DOUBLE ALL NUMBERS');
let numbers = [10, 20, 30, 40, 50];
const data=numbers.map((e,i)=>{
    return e*2;
})
console.log(data);

// TASK 2 – GET EVEN NUMBERS
console.log('TASK 2 – GET EVEN NUMBERS');
let number = [10, 15, 20, 25, 30, 35, 40];
const findEven=number.filter((e)=>{
    return e%2===0;
})
console.log(findEven);

// TASK 3 – FIND FIRST NUMBER
console.log('TASK 3 – FIND FIRST NUMBER');
let Numbers = [10, 25, 35, 50, 60];
const findFirst=Numbers.find((e)=>{
    return e>25;
})
console.log(findFirst);

// TASK 4 – FIND STUDENT
console.log('TASK 4 – FIND STUDENT');
let students = [
{ id: 1, name: "Arun", mark: 75 },
{ id: 2, name: "Priya", mark: 90 },
{ id: 3, name: "Kumar", mark: 65 }
];
const findStudent=students.find((e)=>{
    return e.mark>80;
})
console.log(findStudent);

// TASK 7 – CALCULATE TOTAL
console.log('TASK 7 – CALCULATE TOTAL');
let prices = [100, 200, 300, 400];
const total=prices.reduce((i,e)=>{
    return i+e
},0)
console.log(total);

// TASK 8 – CHECK PASS STATUS
console.log('TASK 8 – CHECK PASS STATUS');
let marks = [75, 80, 35, 90, 65];
let Failed = marks.some(mark => (mark < 40));
let Passed = marks.every(mark => (mark >= 35));
console.log(Failed);
console.log(Passed);

// TASK 9 – FOR...OF
console.log('TASK 9 – FOR...OF');
let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];
for (let skill of skills) {
    console.log(skill);
}