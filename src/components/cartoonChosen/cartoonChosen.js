/* import { printSection } from "../cartoonSection/cartoonsection";


const createSection = (sectionName, button) => {
  // Obtiene la URL de la imagen de fondo del botón clicado
  const backgroundUrl = button.getAttribute("data-background-url");

  // Limpia el cuerpo y crea la sección
  document.body.innerHTML = "";
  const section = document.createElement("section");
  section.classList.add("section-cartoons");
  section.style.backgroundImage = `url(${backgroundUrl})`;
  document.body.appendChild(section);
  printSection(sectionName)
} */