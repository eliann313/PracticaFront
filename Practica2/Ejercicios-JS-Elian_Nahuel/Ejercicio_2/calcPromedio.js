/*Calcular Promedio
Escribir una función que tome un array de números y calcule el promedio.
*/

function calcularPromedio(promedioArray) {
    let suma = 0;
    for (let i = 0; i < promedioArray.length; i++) {
        suma += promedioArray[i];
    }
    let promedio = suma / promedioArray.length;
    if (promedioArray.length === 0) {
        return 0;
    }
    return promedio;
}

let arrayPromedio = [9, 4, 6, 7]; // [9, 4, 6, 7] = 26 / 4 = 6.5
console.log(calcularPromedio(arrayPromedio));

let arrayPromedio2 = [6, 7, 7, 10] // [6, 7, 7, 10] = 30 / 4 = 7.5
console.log(calcularPromedio(arrayPromedio2));

let arrayPromedio3 = [];
console.log(calcularPromedio(arrayPromedio3)); 

