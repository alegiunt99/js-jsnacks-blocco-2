console.log('js ok');

/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
Esegui questo programma in due versioni, con il for e con il while. */

// creo un array vuoto in cui inserire i numeri 
const emptyArray = [];

// dichiaro la somma dei numeri inseriti dall'utente
let somma = 0; 

for (let i = 0; i < 5; i++){

    // chiedo i 5 numeri all'utente
    let numberSelected = parseInt(prompt(`inserisci 1 numero`));

    // dai numeri inseriti faccio la somma
    somma += numberSelected;

}

console.log(somma);