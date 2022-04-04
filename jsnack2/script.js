/*
JSnack 2
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/ 

const arrayVuoto = [];
console.log(arrayVuoto)

for(let i = 0; i < 6; i++){
    let inserireNumero = prompt('inserisci un numero');

    if(inserireNumero % 2 !== 0){
        arrayVuoto.push(inserireNumero)
    }
}

document.write(inserireNumero)
 