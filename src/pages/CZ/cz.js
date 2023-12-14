import "./cz.css"

export const CZ = () =>{
  const divCZ = document.createElement("div")
  divCZ.classList.add("divCZ")
  const p = document.createElement("p")
  p.textContent = "Hola "
  document.body.appendChild(divCZ)
}