console.log('js ok');

/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */


// creo 2 array 
let arrayFirst = [1, 4, 8, 12, 16, 18, 72, 38, 85];

let arraySecond = [1, 2, 3, 4, 5];


// dichiaro le variabili degli indici fuori dal ciclo
let i = 0;

let d = 0;


// dichiaro un numero a caso da aggiungere al secondo array 
let numeroCasuale = 0;


// creo un ciclo 
for (i = 0; i < arrayFirst.length; i++) {

    // se la lunghezza del secondo array è diversa dalla lunghezza del primo
    if (arraySecond.length !== arrayFirst.length) {

        // creo dunque numeri random 
        numeroCasuale = Math.floor(Math.random() * 10);
        console.log(numeroCasuale);


        // aggiungo questi numeri al secondo array
        arraySecond.push(numeroCasuale);
    }
    
   
}
console.log(arraySecond);