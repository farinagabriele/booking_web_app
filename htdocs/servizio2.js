//var myArray;    //Constiene il parse JSON
//contatori
var nRiga = 0;  //Contatore riga Tabelle
var nRigaPadre = 0; //Contatore riga Padre
var nColonnaPadre = 0; //Contatore colonna padre
var nTabellaFiglia = 0; //Contatore tabelle figlia
var nRigaTabellaFiglia = 0; //Contatore righe tabelle figlia
var nCellaTabellaFiglia = 0;   //Contatore celle tabelle figlia
//N
const totRighePadre = 5;    //Totale righe padre
const totColonnePadre = 2; //Totale colonne padre
const totRigheTabelle = 3;  //Totale righe Tabelle
const totColonneTabelle = 3; //Totale colonne Tabelle

//costanti 
const NAME = 1;
const STARS = 2;
const STREET_ADDRESS = 3;
const CITY = 4;
const COUNTRY = 5;
const PHONE = 6;
const EMAIL = 7;
const ROOMS = 8;


function servizio(){    
    
    var xhttp = new XMLHttpRequest();   //Oggetto http request
    var url = "http://localhost:8080/flights";   //url server a cui si fa richiesta
    xhttp.onreadystatechange = function() {     //Funzione che viene richiamata dal response Text
        if (this.readyState == 4 && this.status == 200) {
            
            var json = this.responseText     //JSON inviato dal server
            var myArray = JSON.parse(json);      //Parsing del JSON
            
            inserisciHotel(myArray);
        }
    };
    
    xhttp.open("GET", url); //Creazione richiesta GET
    xhttp.send();           //Invio richiesta al server
    
}

function creaPadri(JSON){
    //Crea una tabella Padri
    //cellaTabella
    var contenitore = document.createElement("td");
    contenitore.setAttribute("class", "cellaTabella");
    //Aggiungo contenitore alla rigaTabelle
    var rigaTabelle = document.getElementById("rigaTabelle"+nRiga);
    rigaTabelle.appendChild(contenitore);

    ///tabella Padri
    var padri = document.createElement("table");
    padri.setAttribute("class", "padri");
    //Aggiungo padri a contenitore
    contenitore.appendChild(padri);

    //Creazione del Titolo
    var titolo = document.createElement("th");
    titolo.setAttribute("class", "titoloPadri");
    var contenutoTitolo = document.createTextNode("pippo");
    titolo.appendChild(contenutoTitolo);
    //Aggiungo titolo a padri
    padri.appendChild(titolo);
    
    var conta = 0;
    for(let i = 0; i < totRighePadre; i++){
        //Creazione delle 4 righe
        nRigaPadre++;
        var riga = document.createElement('tr');
        riga.setAttribute("id", "rigaPadre"+nRigaPadre);
        riga.setAttribute("class", "rigaPadre");
        padri.appendChild(riga);
        

        //Creazione tabella figli
        for(let j = 0; j < totColonnePadre; j++){
            ++nColonnaPadre;
            var cella = document.createElement('td');
            cella.setAttribute("id","cellaPadre"+nColonnaPadre);
            cella.setAttribute("class","cellaPadre");

            /*
            var contenutoCellaPadre = document.createTextNode("cellaPadre");
            cella.appendChild(contenutoCellaPadre);
            */

            ++conta;
            creaFigli(cella, conta, JSON);

            riga.appendChild(cella);
        }
    }

    
    //Creazione della riga con bottone "View more"
    //Creazione riga
    nRigaPadre++;
    var riga = document.createElement('tr');
    riga.setAttribute("id", "rigaPadre"+nRigaPadre);
    riga.setAttribute("class", "rigaPadre");
    padri.appendChild(riga);
    
    //Creazione bottone con testo
    var viewMore = document.createElement('button');
    viewMore.setAttribute('class', 'viewMore');
    var testoBottone = document.createTextNode('View More');
    viewMore.appendChild(testoBottone);

    //Appendo il bottone nella riga
    riga.appendChild(viewMore);
    
    

}


function inserisciHotel(arrayDiJSON){
    //Griglia
    var CollezioneTabelle = document.getElementsByClassName("tabelle");
    var tabelle = CollezioneTabelle[0];

    
    
    /*
    for(let i = 0; i < totRigheTabelle; i++){
        //Creazione 3 righe
        
        
        nRiga++;
        var riga = document.createElement('tr');
        riga.setAttribute("id", "rigaTabelle"+nRiga);
        riga.setAttribute("class", "rigaTabelle");
        tabelle.appendChild(riga);
        
        for(let j = 0; j < totColonneTabelle; j++){
            //Creazione colone
            creaPadri();
        }
        
        
    }
    */
   
    for(let i = 0; i < arrayDiJSON.length; i++){
        if(i % 3 == 0){
            nRiga++;
            var riga = document.createElement('tr');
            riga.setAttribute("id", "rigaTabelle"+nRiga);
            riga.setAttribute("class", "rigaTabelle");
            tabelle.appendChild(riga);
        }
        creaPadri(arrayDiJSON[i]);
    }


}

function creaFigli(cella, conta, JSON){
    //tabellaFiglia
    ++nTabellaFiglia;
    var chiave = document.createTextNode('');
    var valore = document.createTextNode('');
   var tabellaFiglia = document.createElement('table');

   tabellaFiglia.setAttribute('id','tabellaFiglia' + nTabellaFiglia);

   switch(conta){
        case NAME:
           if(JSON.hasOwnProperty('name')){
               chiave = document.createTextNode('Name');
               valore = document.createTextNode(JSON['name']);
           }
           break;
        
        case STARS:
            if(JSON.hasOwnProperty('stars')){
                chiave = document.createTextNode('Stars');
                valore = document.createTextNode(JSON['stars']);
            }
            break;
        
        case STREET_ADDRESS:
            if(JSON.address.hasOwnProperty('streetAddress')){
                chiave = document.createTextNode('Street Adress');
                valore = document.createTextNode(JSON.address['streetAddress']);
            }
            break;
        
        case CITY:
            if(JSON.address.hasOwnProperty('city')){
                chiave = document.createTextNode('City');
                valore = document.createTextNode(JSON.address['city']);
            }
            break;

        case COUNTRY:
            if(JSON.address.hasOwnProperty('country')){
                chiave = document.createTextNode('Country');
                valore = document.createTextNode(JSON.address['country']);
            }
            break;
   
        case PHONE:
            if(JSON.hasOwnProperty('phone')){
                chiave = document.createTextNode('Phone');
                valore = document.createTextNode(JSON['phone']);
            }
            break;   

        case EMAIL:
            if(JSON.hasOwnProperty('email')){
                chiave = document.createTextNode('Email');
                valore = document.createTextNode(JSON['email']);
            }
            break;  

        case ROOMS:
            if(JSON.hasOwnProperty('rooms')){
                chiave = document.createTextNode('Rooms');
                valore = document.createTextNode(JSON['rooms']);
            }
            break;    
                 
    
            

   }

   //rigaTabellaFiglia1
   ++nRigaTabellaFiglia;
   var riga1 = document.createElement('tr');
   riga1.setAttribute('id', 'rigaTabellaFiglia' + nRigaTabellaFiglia);


   //CellaTabellaFiglia1
   ++nCellaTabellaFiglia;
   var cellaTabellaFiglia1 = document.createElement('td');
   cellaTabellaFiglia1.setAttribute('id', 'cellaTabellaFiglia' + nCellaTabellaFiglia);

   
   cellaTabellaFiglia1.appendChild(chiave);
   riga1.appendChild(cellaTabellaFiglia1);
   tabellaFiglia.appendChild(riga1);

   //rigaTabellaFiglia2
   ++nRigaTabellaFiglia;
   var riga2 = document.createElement('tr');
   riga2.setAttribute('id', 'rigaTabellaFiglia' + nRigaTabellaFiglia);

   //CellaTabellaFiglia1
   ++nCellaTabellaFiglia;
   var cellaTabellaFiglia2 = document.createElement('th');
   cellaTabellaFiglia2.setAttribute('id', 'cellaTabellaFiglia' + nCellaTabellaFiglia);

   
   cellaTabellaFiglia2.appendChild(valore);
   riga2.appendChild(cellaTabellaFiglia2);
   tabellaFiglia.appendChild(riga2);




   cella.appendChild(tabellaFiglia);
}

function getFlights()
{
    servizio();
    inserisciHotel();
}
Window.addEventListener('onload',getFlights());


//Funzioni che creano i campi da mostrare
function creaName()
{

}

function creaStars()
{

}

function creaStreetAddress()
{

}

function creaCity()
{
}

function creaCountry()
{
}

function creaPhone()
{
}

function creaEmail()
{
}

function creaRooms()
{
}