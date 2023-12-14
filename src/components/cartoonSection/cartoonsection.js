
import "./cartoonsection.css"


 export const printSection =(chosenArray,) =>{
 
  const sectionCartoons = document.querySelector(".section-cartoons")
  
  const divSection = document.createElement("div")

  divSection.classList.add("divSection")
 
  for(const element of chosenArray){
    const titleCartoon = document.createElement("h2")
    const typeCartoon = document.createElement("h4")
    const divCharacter = document.createElement("div")
    const imgCharacter = document.createElement("img")

    imgCharacter.src = element.url
    titleCartoon.textContent = element.nombre
    typeCartoon.textContent = element.tipo

    imgCharacter.addEventListener("click", () => mostrarGift(element.gift));

    divCharacter.append(titleCartoon)
    divCharacter.append(typeCartoon)
    divCharacter.append(imgCharacter)
    divSection.append(divCharacter)

  }
sectionCartoons.append(divSection)

const divGift = document.createElement("div")
const imgGift = document.createElement("img")
divGift.classList.add("divGift")
imgGift.classList.add("imgGift")

/* imgGift.src = chosenArray[0].gift */

divGift.append(imgGift)
sectionCartoons.append(divGift)

document.body.append(sectionCartoons)

} 
const mostrarGift = (giftUrl) => {
  const imgGift = document.querySelector(".imgGift");
  imgGift.src = giftUrl;
};