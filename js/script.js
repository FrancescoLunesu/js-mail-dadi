// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// dichiaro le variabili dei due dadi + la variabile del vincitore
var dadoUtente = Math.floor(Math.random()*6) +1;
// console.log(dadoUtente);
document.getElementById('utente').innerHTML = "Utente, è uscito il numero:" + " " + dadoUtente;
var dadoComputer = Math.floor(Math.random()*6) +1;
// console.log(dadoComputer);
document.getElementById('computer').innerHTML = "Computer, è uscito il numero:" + " " + dadoComputer;
var vincitore;

// utilizzo IF ed ELSE IF per applicare delle condizioni secondo le quali si deciderà il vincitore:
if (dadoUtente > dadoComputer){
    vincitore = dadoUtente;
    // console.log("vincitore utente con numero:" + vincitore);
    document.getElementById('vittoria').innerHTML = "Il vincitore è l'utente, con il numero:" + " " + vincitore;
} else if (dadoUtente < dadoComputer){
    vincitore = dadoComputer;
    // console.log("vincitore computer con numero:" + vincitore);
    document.getElementById('vittoria').innerHTML = "Il vincitore è il computer, con il numero:" + " " + vincitore;
} else {
    // console.log("ATTENZIONE: parità");
    document.getElementById('vittoria').innerHTML = "ATTENZIONE: parità";
}




// VECCHIO ESERCIZIO

// var email = ["luca@gmail.com", "andrea@gmail.com", "fabrizio@hotmail.it", "elisa@outlook.it", "anna@hotmail.it"];
// var emailUtente = prompt("Inserisci il tuo indirizzo email");
//
// for (var i = 0; i < email.length; i++) {
//
// if (email[i] == emailUtente) {
//     // document.getElementById('mail').innerHTML = "L'email è corretta!";
//         alert("l'email è corretta!")
//     } else {
//     // document.getElementById('mail').innerHTML = "L'email non è presente nel sistema!";
//         alert("ATTENZIONE: l'email inserita non è presente nel sistema!")
//     }
//
//     break;
// }

// for (var i = 0; i <= email.length; i++){
//
//     // console.log(email[i]);
//     if (){
//         console.log("bene!");
//     }else{
//         console.log("male!");
//     }
//
// }
