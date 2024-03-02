let palabra = "APPLE";
let tieneVidas = 6;
let verde= "#79b851";
let amarillo= "#f3c237";
let gris= "#a4aec4";

let diccionario = ["APPLE", "HOUSE", "ANGEL", "PASTA", "NEVER", "AFTER"];
let max = diccionario.length -1;
let indice = Math.floor(Math.random() * max + 1)
palabra = diccionario[indice];

let input = document.getElementById("guess-input");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("guess-button").click();
  }
});

document.getElementById("guess-button").addEventListener("click", () => {
  const intento = leerIntento();
  if (palabra === intento) {
    terminar("GANASTE!😀");
    return;
  }
  const row = document.createElement("div");
  row.className = "row";
  const grid = document.getElementById("grid");
  for (const i in intento) {
    const span  = document.createElement("span")
    span.className = "letter";
    span.innerText = intento[i];
    if (intento[i] === palabra[i]) {
      span.style.background = verde;  
  } else if(palabra.includes(intento[i]) && noSerRepite(palabra, intento[i])) {
      span.style.background = amarillo;
    } else {  
      span.style.background = gris;
    }
    row.appendChild(span);
  }
  grid.appendChild(row);
  tieneVidas--;
  if(!tieneVidas) {
    terminar("PERDISTE!😀");
    return
  }
});
  
function leerIntento() {
  const input = document.getElementById("guess-input");
  const valor = input.value.toUpperCase();
  return valor;
}
  
function terminar(mensaje){
  let p = document.getElementById("guesses");
  p.innerHTML = "<h1>" + mensaje + "</h1>";
}

function noSerRepite(palabra, letra){
  //tiene que ver cuantas letras verdes en palabras y ver si sobra alguna.  
  return true;
}






