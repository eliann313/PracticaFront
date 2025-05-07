/*Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes.
*/

function sumar(num1, num2) {
    return num1 + num2;
}

let restar = (num1, num2) => {
    return num1 - num2;
}

operando = function operar(callback, num1, num2) {
    return callback(num1, num2);
}

console.log(operando(sumar, 5, 3));
console.log(operando(restar, 9, 16)); 

let dividir = (num1, num2) => {
    if (num2 === 0) {
        return "No se puede dividir por cero";
    } else {
        return num1 / num2;
    }
}
console.log(operando(dividir, 10, 0));
console.log(operando(dividir, 10, 2));