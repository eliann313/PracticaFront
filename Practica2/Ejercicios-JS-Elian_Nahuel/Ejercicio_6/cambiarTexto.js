/* Cambiar Texto de Párrafos
Seleccionar todos los elementos p de la página y cambiar su texto al hacer clic
en un botón. */

let botonCambiarTexto = document.getElementById("cambiarTexto");
let parrafos = document.querySelectorAll("p");
let textoCambiado = false;

botonCambiarTexto.addEventListener("click", () => {
    parrafos.forEach((parrafo) => {
        if (textoCambiado) {
            parrafo.innerText = "Otro texto cambiado"; // texto 2
        } else {
            parrafo.innerText = "Texto cambiado"; // texto 1
        }
    });
    textoCambiado = !textoCambiado; // alternar entre los dos textos al tocar el boton
});
