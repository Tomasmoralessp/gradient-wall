document.addEventListener("DOMContentLoaded", () => {
  const gradientSection = document.getElementById("gradientSection");
  const gradientBox = document.getElementById("gradientBox");
  const header = document.querySelector("header");
  const titleBox = document.getElementById("titleBox");

  // Función para expandir el gradiente
  const expandGradient = () => {
    // Cambiar el fondo de la sección al gradiente
    gradientSection.classList.remove("bg-black");
    gradientSection.classList.add(
      "bg-gradient-to-r",
      "from-indigo-500",
      "via-purple-500",
      "to-pink-500"
    );

    // Ocultar header, título y gradienteBox ajustando z-index
    header.style.zIndex = "-1";
    gradientBox.style.zIndex = "-1";
    titleBox.style.zIndex = "-1";
  };

  // Añadir evento de clic
  gradientBox.addEventListener("click", expandGradient);
});
