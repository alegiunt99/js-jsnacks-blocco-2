console.log('js ok');

/* Crea un array di numeri interi
fai la somma di tutti gli elementi che sono in posizione dispari. */

const numbersArray = [2, 3, 45, 67, 46, 77, 86, 49, 43, 14, 3];

console.log("all'interno dell'array ci sono:", numbersArray.length, "numeri");

let somma = 0;

for (let index = 0; index < numbersArray.length; index++) {
    if (index % 2 !== 0) {
        somma += numbersArray[index];

        console.log(numbersArray[index]);
    }
}
console.log("La somma dei numeri in posizione dispari è:", somma);



