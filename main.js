const openn = document.querySelector('.open')
const closee = document.querySelector(".close")
const menu = document.getElementById("menu")

console.log(openn)
console.log(closee)
console.log(menu)


openn.addEventListener("click",()=>{
   menu.classList.add("active")
   closee.classList.add("active")
})

closee.addEventListener("click",()=>{
   menu.classList.remove("active")
   closee.classList.remove("active")
})