const imagen = document.getElementById("borde_img");

imagen.addEventListener("click", () => {
  if (imagen.style.borderStyle === "solid") {
    imagen.style.border = "none";
  } else {
    imagen.style.borderColor = "red";
    imagen.style.borderWidth = "2px";
    imagen.style.borderStyle = "solid";
  }
});
