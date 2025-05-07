/*Filtrar Números Pares
Crear una función que reciba un array de números y devuelva un nuevo array que
contenga solo los números pares.
*/

function filtrarNumPares(arrayNumeros) {
    let arrayPares = arrayNumeros.filter((numero) => numero % 2 === 0);
    return arrayPares;
}
let arrayNumeros = [3, 8, 4, 6, 9, 7, 5, 1,]; // [8, 4, 6]
console.log(filtrarNumPares(arrayNumeros));


let arrayNumeros2 = [20, 3, 8, 4, 2, 6, 9, 1, 7, 100, 5, 11,]; // [20, 8, 4, 2, 6, 100]
console.log(filtrarNumPares(arrayNumeros2));