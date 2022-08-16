let button1 = document.querySelector("#increase")
let button2 = document.querySelector("#reset")
let button3 = document.querySelector("#decrease")
let dispSpan = document.querySelector("span")

let a=0;
button1.addEventListener("click",()=>{
   a=a+1;
   dispSpan.innerText=a;
  
}) 
button2.addEventListener("click",()=>{
    a=0;
    dispSpan.innerText=a;
   
 }) 
 button3.addEventListener("click",()=>{
    a=a-1;
    dispSpan.innerText=a;
   
 }) 