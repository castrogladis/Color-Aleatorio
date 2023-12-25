const boton = document.querySelector("button");
const color = document.getElementById("color");

function colorAleatorio() {
  let digitos = "01234567890ABCDEF";
  let colorHexadecimal = "#"

  for (let i = 0; i < 6; i++) {
    let codigoAleatorio = Math.floor(Math.random() * 16);
    colorHexadecimal += digitos[codigoAleatorio];
  }

  return colorHexadecimal;
}

boton.addEventListener("click", () => {
  let cambioColor = colorAleatorio();
  color.textContent = cambioColor;
  document.body.style.backgroundColor = cambioColor;
  boton.style.backgroundColor = cambioColor; 
}) 






























