/*Imprimir con Retraso
Usar una función flecha y setTimeout para imprimir cada elemento de un array
con un retraso de 1 segundo por elemento.
*/

let imprimirConRetraso = (array1seg) => {
    array1seg.forEach((elemento, i) => {
        setTimeout(() => {
            console.log(elemento);
        }, i * 1000); 
    }
)};

let saludo = ["Hola", "Buen día", "Profe"];
imprimirConRetraso(saludo);