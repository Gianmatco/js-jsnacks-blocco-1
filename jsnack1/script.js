/*JSnack 1
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e 
comunicagli se può partecipare o no alla festa.

creare lista invitati
chiedi a utente noome 
se è tra gli invitati puo partecipare altrimenti no 
*/

const listaInvitati = ["marco", "luigi", "rosa", "piero"];
let nomeInvitato = prompt("qual\ è il tuo nome?");
let partecipante = false;

for(let i = 0; i < listaInvitati.length; i++){
    if(listaInvitati[i] === nomeInvitato){
        let partecipante = true;
       
    }
}
if(partecipante){
    document.write('benvenuto alla festa ' + nomeInvitato + '!');
}else{
    document.write('Spiacente il tuo nome non è nella lista')
}
