const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const sum = document.getElementById("sum")
sum.addEventListener("click",()=>{
    result.innerText=(Number(num1.value)+Number(num2.value))
});

const sub = document.getElementById("sub")
sub.addEventListener("click",()=>{
    result.innerText=(Number(num1.value)- Number(num2.value))
});

const multiple = document.getElementById("multiple")
multiple.addEventListener("click",()=>{
    result.innerText=(Number(num1.value)*Number(num2.value))
});

const divition = document.getElementById("divition")
divition.addEventListener("click",()=>{
    result.innerText=(Number(num1.value)/Number(num2.value))
});