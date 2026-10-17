// const title= document.getElementById("title");
// title.innerHTML="Welcome to JavaScript";
// title.style.color="blue";
// title.style.fontSize="30px";

// const para=document.getElementsByClassName("para");
// para[0].style.color="yellow";
// para[1].style.color="red";para[1].style.fontSize="20px";
// para[2].style.fontSize="40px";

// const same=document.getElementsByClassName("same");
// same[0].innerHTML="HTML";
// same[1].innerHTML="React";
// same[2].innerHTML="Vue";
// same[3].innerHTML="Angular";
// same[4].innerHTML="Svelte";

// same[0].style.color="red";

const heading=document.getElementById("heading1");
const colorBtn=document.getElementById("colorBtn");


colorBtn.addEventListener("click",()=>{
heading.style.color="blue"
heading.style.backgroundColor="lightgray"
heading.style.display="block"
})