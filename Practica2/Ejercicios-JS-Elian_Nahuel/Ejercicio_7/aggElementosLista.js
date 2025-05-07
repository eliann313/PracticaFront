/* Agregar Elementos a una Lista
Crear una lista desordenada vacía y un botón. Al hacer clic en el botón,
agregar un nuevo elemento a la lista con un número que se incremente
automáticamente. */

let lista = document.getElementById("lista");
let botonAgregar = document.createElement("button");
botonAgregar.innerText = "Agregar Elemento";
document.body.appendChild(botonAgregar);
let contador = 0;
botonAgregar.addEventListener("click", () => {
    // se reinicia el contador si la lista está vacía o no tiene elementos
    if (lista.childElementCount === 0) {
        contador = 0;
    }
    let elementoLista = document.createElement("li");
    elementoLista.innerText = `Elemento ${contador}`;
    lista.appendChild(elementoLista);
    contador++;
});
