// TASK 1 – CHANGE HEADING TEXT
const title = document.getElementById("title");
console.log(title);
title.innerText = "Welcome to JavaScript";
title.style.color = "blue";
title.style.fontSize = "30px";

// TASK 2 – CHANGE PARAGRAPH STYLES
const paragraph = document.getElementsByClassName("paragraph");
paragraph[0].style.color = "red";
paragraph[1].style.backgroundColor = "yellow";
paragraph[2].style.fontSize = "25px";

// TASK 5 – UPDATE MULTIPLE ELEMENTS
let headings = document.querySelectorAll(".heading"); 
headings[0].innerText = "HTML"; 
headings[1].innerText = "CSS"; 
headings[2].innerText = "JavaScript"; 
headings[3].innerText = "React"; 
headings[4].innerText = "Node.js"; 

headings[0].style.color = "red"; 
headings[1].style.color = "blue"; 
headings[2].style.color = "green"; 
headings[3].style.color = "orange"; 
headings[4].style.color = "purple";