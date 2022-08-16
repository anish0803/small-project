let button = document.querySelector("#button")
let close = document.querySelector("#close")
let docs = document.querySelector(".content")

button.addEventListener("click",()=>{
  
   docs.style.visibility="visible"
 })

 close.addEventListener("click",()=>{
  
    docs.style.visibility="hidden"
  })
