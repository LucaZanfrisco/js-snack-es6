"use strict";

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

const tavoloVip = nomiInvitati.map((element,index) => {
    const vip = {
        nome: element,
        posto: index
    }
    return vip;
});

console.log(tavoloVip);

