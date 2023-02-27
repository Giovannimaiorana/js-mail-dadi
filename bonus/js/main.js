//FACCIAMO UNA LISTA USANDO ARRAY CON ELENCO EMAIL AUTORIZZATE 
const utentiAutorizzati = ["pippo@gmail.com", "franco@gmail.com", "pluto@gmail.com", "giovanni@gmail.com", "eleonora@gmail.com" ];
//COLLEGHIAMO HTML CON LE VARIABILI DEL DOCUMENTO JS 
let inputEmail = document.getElementById('emailUtente');
let inputBtn = document.getElementById('button');
let risultatoControllo = document.getElementById('risultato');
inputBtn.addEventListener('click' , 
    function(){
         let autorizzato = false;
         for ( let i=0; i <utentiAutorizzati.length; i++){
            if(inputEmail.value == utentiAutorizzati[i]){
                autorizzato = true;
            }     
            console.log(inputEmail.value);
        }
        if(autorizzato){
            alert("Accesso Autorizzato la sua e-mail compare nel nostro database ");
        } else {
            alert('accesso non autorizzato');
        }
    }

);

    



// STAMPIAMO IL MESSAGGIO SIA NEL CASO IN CUI L'EMAIL SIA PRESENTE TRA LA LISTA SIA NEL CASO CONTRARIO


//FINE ESERCIZIO EMAIL




// ESERCIZIO DADI
//GENERIAMO UN NUMERO RANDOM PER IL GIOCATORE 1 CHE VADA DA 1 A 6
/*const numeroPlayer1 = Math.floor(Math.random() * 6) + 1; 
console.log(numeroPlayer1);
//GENERIAMO UN NUMERO RANDOM PER IL GIOCATORE 2 ANCH'ESSO CON UN VALORE DA 1 A 6
const numeroPLayer2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPLayer2);
//CONFRONTIAMO I DUE NUMERI, DICENDO CHE IL NUMERO PIù ALTO VINCE, DUNQUE IL NUMEOR PIù BASSO PERDER E REGOLANDO COSA SIA NECESSARIO FARE IN CASO DI PAREGGIO
if ( numeroPlayer1 > numeroPLayer2){
    console.log("Player1 vince");
}else if ( numeroPLayer2 > numeroPlayer1){
    console.log("Player2 vince");
}else 
console.log("Pareggio, Tirare i dati per continuare");

    */
