"use strict";

// Lista degli invitati alla grande festa
const nomiInvitati = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];
// Nome del tavolo
const nomeTavolo = 'Tavolo VIP';

// Inserimento degli invitati in un array di oggetti dove sono specificati nome e posto a sedere
const tavoloVip = nomiInvitati.map((element,index) => {
    const vip = {
        tavolo: nomeTavolo,
        nome: element,
        posto: (index + 1)
    }
    return vip;
});

// Stampa in console dei segna posto
console.log(tavoloVip);

// Stampa in console di ogni singolo segnaposto 
tavoloVip.forEach((element) => {
    for(let key in element){
        console.log(`${key}: ${element[key]}`);
    }
})

