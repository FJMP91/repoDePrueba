let titulo = document.querySelector("h1");
let boton = document.querySelector("button");
/*
let miHTML = document.querySelector("html");
miHTML.onclick = function () {alert("¡Ouch! ¡Deja de pincharme!");};
*/

function ponerNombre() {
  let nombre = prompt("Ingresa nombre");
  if(!nombre){
    ponerNombre();
  }else{
  localStorage.setItem("nombre", nombre);
  titulo.textContent = "Probando, " + nombre;
  }
  if(!localStorage.getItem("nombre")){
    alert("Debes introducir un nombre");
    ponerNombre();
  }else{
    let nombreAlm=localStorage.getItem("nombre");
    titulo.textContent="Aqui tienes "+nombre;
  }
}
boton.onclick = function () {
  ponerNombre();
};
