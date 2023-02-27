//FACCIAMO UNA LISTA USANDO ARRAY CON ELENCO EMAIL AUTORIZZATE 
const utentiAutorizzati = ["pippo@gmail.com", "franco@gmail.com", "pluto@gmail.com", "giovanni@gmail.com", "eleonora@gmail.com" ];
// CREIAMO COSTANTE CHE CHIEDA ALL'UTENTE DI INSERIRE LA PROPRIA EMAIL
const emailUtente= prompt("Inserisci la tua email");
// CONTROLLIAMO SE L'EMAIL INSERITA DALL'UTENTE è PRESENTE NELLA LISTA DEGLI UTENTI PRECEDENTEMENTE DEFINITA NELL'ARREY
let autorizzato = false;

for ( let i=0; i <utentiAutorizzati.length; i++){
    if(emailUtente === utentiAutorizzati[i]){
        autorizzato = true;
    }
}

// STAMPIAMO IL MESSAGGIO SIA NEL CASO IN CUI L'EMAIL SIA PRESENTE TRA LA LISTA SIA NEL CASO CONTRARIO
if(autorizzato){
    console.log("Accesso Autorizzato la sua e-mail compare nel nostro database ");
} else {
    console.log(" Siamo spiacenti ma la sua email non compare nei nostri database");
}

