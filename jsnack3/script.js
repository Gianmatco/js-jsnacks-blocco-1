/*
JSnack 3
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
let richiesta = prompt('inserisci un numero di 4 cifre');
console.log(richiesta);

sum = 0;

while (richiesta) {
    sum += richiesta % 10;
    richiesta = Math.floor(richiesta / 10);
}

document.write('la somma delle 4 cifre è di :' + sum)

