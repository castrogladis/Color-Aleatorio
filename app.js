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

































// const color = document.getElementById("color");
// const boton = document.querySelector("button");

// function generarColorHex(){
//   let colorHex = "#";
//   let digitos = "0123456789ABCDEF"
  
//   for (let i = 0; i < 6; i++) {
//     let indiceAleatorio = Math.floor(Math.random() * 16);
//     colorHex += digitos[indiceAleatorio]
//   }

//   return colorHex;
// }

// boton.addEventListener("click", function () {
//   let colorAleatorio = generarColorHex();
//   color.textContent = colorAleatorio;
//   document.body.style.backgroundColor = colorAleatorio
//   boton.style.backgroundColor = colorAleatorio
// })