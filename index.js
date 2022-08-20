let menu=document.querySelector(".menu")
let ul=document.querySelector(".social-lists")
let i=document.querySelector(".fa-angle-down")
let body=document.querySelector("body")


menu.addEventListener("click",()=>{
    ul.classList.toggle("hide");
    i.classList.toggle("rotate");
    body.classList.toggle("renk")
})

