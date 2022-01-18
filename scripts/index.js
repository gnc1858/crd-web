const btn =document.getElementById("btn-init")
const intro=document.querySelector(".intro")
const canvas =document.getElementById("cardioid")
import {init} from "./cardioid.js"



btn.addEventListener("click",()=>{
    intro.classList.add("animate")
    canvas.style.visibility="visible"
    setTimeout(()=>{
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
        init()

    },2000)

})






