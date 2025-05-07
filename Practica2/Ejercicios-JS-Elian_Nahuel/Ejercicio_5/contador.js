/*Contador con Botones
Crear un botón para incrementar y otro para decrementar un contador mostrado en
un elemento div. Actualizar el texto del div al hacer clic.
*/

let contador = 0;
let divContador = document.getElementById("contador"); 
let botonIncrementar = document.getElementById("incrementar");
let botonDecrementar = document.getElementById("decrementar"); 


botonIncrementar.addEventListener("click", () => {
    contador++;
    divContador.innerText = `Contador: ${contador}`; 
}
);
botonDecrementar.addEventListener("click", () => {
    contador--;
    divContador.innerText = `Contador: ${contador}`; 
}
);

