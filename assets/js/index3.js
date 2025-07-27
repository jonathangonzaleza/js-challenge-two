
function verificarContraseña() {
  digito1 = document.getElementById("dig1").value;
  digito2 = document.getElementById("dig2").value;
  digito3 = document.getElementById("dig3").value;

  contraseña = digito1 + digito2 + digito3;
  resultado = document.getElementById("result");

  if (contraseña === "911") {
    resultado.textContent = "pasword 1 correcta";
    resultado.style.color = "green";
  } else if (contraseña === "197") {
    resultado.textContent = "pasword 2 correcta";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "pasword incorrecta";
    resultado.style.color = "red";
  }
}
