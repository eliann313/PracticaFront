/* Eliminar Elementos de una Lista
Modificar el ejercicio anterior para que cada elemento generado tenga un botón
de "Eliminar" que borre solo ese elemento de la lista. */

let botonEliminar = document.createElement("button");
botonEliminar.innerText = "Eliminar Elemento";
document.body.appendChild(botonEliminar);
botonEliminar.addEventListener("click", () => {
    let elementosLista = document.querySelectorAll("li");
    if (elementosLista.length > 0) { // verificar si hay elementos en nuestra lista
        let ultimoElemento = elementosLista[elementosLista.length - 1]; // agarramos el último elemento
        ultimoElemento.remove();
    }}
);

