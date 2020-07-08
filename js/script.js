var email = ["luca@gmail.com", "andrea@gmail.com", "fabrizio@hotmail.it", "elisa@outlook.it", "anna@hotmail.it"];
var emailUtente = prompt("Inserisci il tuo indirizzo email");

for (var i = 0; i < email.length; i++) {

if (email[i] == emailUtente) {
    // document.getElementById('mail').innerHTML = "L'email è corretta!";
        alert("l'email è corretta!")
    } else {
    // document.getElementById('mail').innerHTML = "L'email non è presente nel sistema!";
        alert("ATTENZIONE: l'email inserita non è presente nel sistema!")
    }

    break;
}

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
