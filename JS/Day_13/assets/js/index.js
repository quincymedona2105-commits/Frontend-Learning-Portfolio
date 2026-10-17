
// TASK 1 - CHANGE HEADING COLOR

let heading1 = document.getElementById("heading1");
let colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
    heading1.style.color = "red";
    heading1.style.fontSize = "30px";
});


// TASK 2 - CHANGE BOX BACKGROUND

let box = document.getElementById("box");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");

blueButton.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
});

yellowButton.addEventListener("click", () => {
    box.style.backgroundColor = "yellow";
    box.style.color = "black";
});


// TASK 3 - SHOW AND HIDE

let paragraph = document.getElementById("paragraph");
let hideButton = document.getElementById("hideButton");
let showButton = document.getElementById("showButton");

hideButton.addEventListener("click", () => {
    paragraph.style.display = "none";
});

showButton.addEventListener("click", () => {
    paragraph.style.display = "block";
});
