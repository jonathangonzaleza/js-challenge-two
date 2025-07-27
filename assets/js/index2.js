function verificarCantidadStickers() {
  sticker1 = Number(document.getElementById("sticker1").value);
  sticker2 = Number(document.getElementById("sticker2").value);
  sticker3 = Number(document.getElementById("sticker3").value);

  total = Number(sticker1) + Number(sticker2) + Number(sticker3);
  resultado = document.getElementById("resultado");

  if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
    resultado.style.color = "red";
  }
}
