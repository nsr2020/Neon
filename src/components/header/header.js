import { avengers } from "../../data/avengers";
import {CZ} from "../../data/czArray"
import {simpsons} from "../../data/simpsonsArray"
import {dracula} from "../../data/draculaArray"
import {createAvengers} from "../../pages/Avengers/avengers"
import { printSection } from "../cartoonSection/cartoonsection";
import "./header.css"


export const createHeader = () =>{
    const header = document.createElement("header")
    const img = document.createElement("img")
    const divBtn = document.createElement("div")

const bt1 = document.createElement("button")
const bt2 = document.createElement("button")
const bt3 = document.createElement("button")
const bt4 = document.createElement("button")

img.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702391417/Ne0n/log3_w3qiue.jpg"

header.appendChild(img)
divBtn.append(bt1)
divBtn.append(bt2)
divBtn.append(bt3)
divBtn.append(bt4)




bt1.addEventListener("click", function(){
    const sectionCartoons = document.querySelector(".section-cartoons")
    sectionCartoons.innerHTML = ""
    sectionCartoons.classList.add("bg1")
    sectionCartoons.classList.remove("bg2", "bg3", "bg4")
    printSection(avengers)
})
bt2.addEventListener("click", function(){
    const sectionCartoons = document.querySelector(".section-cartoons")
    sectionCartoons.innerHTML = ""
    sectionCartoons.classList.add("bg2")
    sectionCartoons.classList.remove("bg1","bg3","bg4")
    printSection(CZ)
})
bt3.addEventListener("click", function(){
    const sectionCartoons = document.querySelector(".section-cartoons")
    sectionCartoons.innerHTML = ""
    sectionCartoons.classList.add("bg3")
    sectionCartoons.classList.remove("bg1","bg2","bg4")
    printSection(dracula)
})
bt4.addEventListener("click", function(){
    const sectionCartoons = document.querySelector(".section-cartoons")
    sectionCartoons.innerHTML = ""
    sectionCartoons.classList.add("bg4")
    sectionCartoons.classList.remove("bg1","bg2","bg3")
    printSection(simpsons)
})



header.appendChild(divBtn)

document.body.appendChild(header)


};
  

