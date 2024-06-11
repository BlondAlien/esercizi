

function Esercizi_Variabili_e_Costanti_Javascript() {


    // Esercizio 1 
    // Dichiarare una variabile chiamata "numero" e assegnarle il valore 5. Stampare il valore della variabile sulla console.
    let numero = 5;
    console.log(numero);

    // Esercizio 2
    // Dichiarare una costante chiamata "PI" e assegnarle il valore di 3.14. Stampare il valore della costante sulla console.
    const PI = 3.14;
    console.log(PI);


    // Esercizio 3
    // Dichiarare una variabile chiamata "nome" e assegnarle il valore "Marco". 
    // Successivamente, modificare il valore della variabile in "Luca". Stampare il nuovo valore sulla console.
    let nome = "Marco";
    nome = "Luca";
    console.log(nome);

    // Esercizio 4
    // Dichiarare una variabile chiamata "saluto" e assegnarle il valore "Ciao, come stai?". Stampare il valore della variabile sulla console.
    let saluto = "ciao come stai?";
    console.log(saluto);



    // Esercizio 5
    // Dichiarare una variabile chiamata "vero" e assegnarle il valore true. Stampare il valore della variabile sulla console.
    let vero = "true";
    console.log(vero);

    // 🍰 Esercizio 6 (opzionale)
    // Dichiarare una variabile chiamata "numeri" e assegnarle un array contenente i numeri da 1 a 5. Stampare l'array sulla console.
    let numeri = [1, 2, 3, 4, 5];
    console.log(numeri);

    // Esercizio 7 (opzionale)
    // Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà: "nome" (con valore "Mario") e "età" (con valore 30). Stampare l'oggetto sulla console.
    let persona = {
        nome: "Mario",
        età: 30,
    }
    console.log(persona);
}


function Esercizi_Tipi_di_Dati_Javascript() {
    // Esercizio 1
    // Dichiarare una variabile chiamata "nome" e assegnarle il tuo nome. 
    // Stampare la variabile sulla console.
    let nome = "sara";
    console.log(nome);

    // Esercizio 2
    // Dichiarare una variabile chiamata "età" e assegnarle il tuo numero di anni. 
    // Stampare la variabile sulla console.
    let eta = 21;
    console.log(eta);

    // Esercizio 3
    // Dichiarare una variabile chiamata "verificato" e assegnarle il valore booleano true. 
    // Stampare la variabile sulla console.
    let verificato = true;
    console.log(verificato);

    // Esercizio 4
    // Dichiarare una variabile chiamata "numeri" e assegnarle un array contenente una serie di numeri. 
    // Stampare l'array sulla console.
    let numeri = [1, 2, 3, 4, 5];
    console.log(numeri);

    // Esercizio 5
    // Dichiarare una variabile chiamata "persona" e assegnarle un oggetto con le seguenti proprietà: "nome" (con il tuo nome) e "età" (con il tuo numero di anni). 
    // Stampare l'oggetto sulla console.
    let persona = {
        nome: "sara",
        eta: "21"
    }

    // Esercizio 6
    // Dichiarare una variabile chiamata "nullo" e assegnarle il valore null. 
    // Stampare la variabile sulla console.
    let nullo = null;
    console.log(nullo);

    // Esercizio 7
    // Dichiarare una variabile chiamata "nonDefinito" senza assegnarle un valore. 
    // Stampare la variabile sulla console.
    let nonDefinito;
    console.log(nonDefinito);

    // Esercizio 8
    // Eseguire un'operazione matematica non valida, ad esempio dividere una stringa per un numero. 
    // Stampare il risultato sulla console.
    console.log(nome / 3);

    // Esercizio 9
    // Dichiarare una variabile chiamata "simbolo" e assegnarle un valore di tipo Symbol. 
    // Stampare la variabile sulla console.
    let simbolo = Symbol();
    console.log(simbolo);
}


function Esercizi_Lavorare_con_Numeri_Javascript() {
    // Esercizio 1
    // Somma di numeri: Calcola la somma di due numeri e stampa il risultato sulla console.
    let numero = 1;
    let numerod = 2;
    let somma = numero + numerod;
    console.log(somma);

    // Esercizio 2
    // Sottrazione di numeri: Calcola la differenza tra due numeri e stampa il risultato sulla console.
    let meno = numero - numerod;
    console.log(meno);

    // Esercizio 3
    // Moltiplicazione di numeri: Calcola il prodotto tra due numeri e stampa il risultato sulla console.
    let Moltiplicazione = numero * numerod;
    console.log(Moltiplicazione);

    // Esercizio 4
    // Divisione di numeri: Calcola il risultato della divisione tra due numeri e stampa il risultato sulla console.
    let divisione = numero / numerod;
    console.log(divisione);

    // Esercizio 5
    // Resto della divisione: Calcola il resto della divisione tra due numeri e stampa il risultato sulla console.
    let resto = numero % numerod;
    console.log(resto);

    // Esercizio 6
    // Incremento di un numero: Incrementa un numero di 1 e stampa il risultato sulla console.
    numero++;
    console.log(numero);

    // Esercizio 7
    // Decremento di un numero: Decrementa un numero di 1 e stampa il risultato sulla console.
    numero--;
    console.log(numero);

    // Esercizio 8
    // Calcolo della potenza: Calcola la potenza di un numero elevato a una potenza predefinita e stampa il risultato sulla console.
    let dice = "di no";
    console.log(dice); 

    // Esercizio 9
    // Calcolo della radice quadrata: Calcola la radice quadrata di un numero e stampa il risultato sulla console.
    let non = "vuole";
    console.log(non);

    // Esercizio 10
    // Arrotondamento di un numero: Scrivi un programma che arrotondi un numero decimale e stampi il risultato sulla console.
    let numerotre = 20.3;
    let numeroarro = Math.round(numerotre);

    // Esercizio 11
    // Generazione di un numero casuale: Scrivi un programma che generi un numero casuale compreso tra un valore minimo e massimo e lo stampi sulla console.
    let numerocasual = Math.floor(Math.random() * (10 - 5 + 1)) + 5;


    // Esercizio 12
    // Conversione da stringa a numero: Scrivi un programma che converte una stringa contenente un numero in un vero numero e stampa il risultato sulla console.
    let numeroqua = "10";
    let numerover = parseInt(numeroqua);

}


function Esercizi_Operatori_di_Comparazione_Javascript() {

// Esercizio 1
// Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è maggiore del secondo.
let numero1 = 10;
let numero = 11
console.log(numero > numero);

//  Esercizio 2
// Stampa sulla console il risultato del confronto tra due stringhe per verificare se la prima stringa viene prima della seconda in ordine alfabetico.
let string1 = "sara";
let string2 = "furia";
console.log(string1 < string2);

//  Esercizio 3
// Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono uguali.
let numero2 = 10;
let numero0 = "5"
console.log(numero2 == numero0);

//  Esercizio 4
// Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono uguali sia in valore che in tipo.


//  Esercizio 5
// Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono diversi.
let numero4 = "3";
let numero5 = 5;
console.log(numero4 != numero5);

//  Esercizio 6
// Stampa sulla console il risultato del confronto tra un numero e una stringa per verificare se sono diversi sia in valore che in tipo.


//  Esercizio 7
// Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è minore-uguale del secondo.
let numero6 = 7;
let numero7 = 10;
console.log( numero6 <= numero7);

//  Esercizio 8
// Stampa sulla console il risultato del confronto tra due numeri per verificare se il primo numero è diverso dal secondo.
let numero8 = 8;
let numero9 = 9;
console.log(numero8 != numero9);

}


function Esercizi_Operatori_Logici_Javascript(){

// Esercizio 1
// Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore AND.


// Esercizio 2
// Stampa sulla console il risultato della valutazione di due condizioni a scelta utilizzando l'operatore OR.


// Esercizio 3
// Stampa sulla console il risultato della negazione di una condizione a scelta utilizzando l'operatore NOT.


// Esercizio 4
// Date due costanti valutare se valore1 è maggiore di 0 e valore2 è minore di 20, oppure se valore1 è uguale a 5.


// Esercizio 5
// Date due stringhe valutare se stringa1 non è vuota e stringa2 non è la parola "treno".


// Esercizio 6
// Dati tre numeri valutare se: valore1 è maggiore di zero oppure valore2 è minore di venti. Queste condizioni devono verificarsi insieme a valore3 compreso tra 10 e 20.
}