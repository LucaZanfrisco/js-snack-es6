"use strict";
// FUNZIONI

// Genera due numeri random che vengono inseriti in un oggetto
function numeriRandom(min, max) {
  const stat = {
    punti: 0,
    falli: 0,
  };
  stat.punti = Math.floor(Math.random() * (max - min + 1)) + min;
  stat.falli = Math.floor(Math.random() * (max - min + 1)) + min;
  return stat;
}

// MAIN
// Lista di 10 squadre
const listaSquadre = [
  {
    nome: "Chelsea",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Liverpool",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Real Madrid",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Bayern Monaco",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Barcellona",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Galatasary",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Atletico Madrid",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Fiorentina",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Albinoleffe",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Manchester City",
    punti: 0,
    falli: 0,
  },
];

console.log(listaSquadre);

const min = 1;
const max = 100;

// Crea una nuova lista con punti e falli generati randomicamente
const nuovaLista = listaSquadre.map((element) => {
  // Chiamata alla funzione che genera i numeri random
  const stat = numeriRandom(min, max);
  element.punti = stat.punti;
  element.falli = stat.falli;
  return element;
});

// Stampa della lista con i punti e falli generati
console.log(nuovaLista);

// Crea una nuova lista da dove prende solo il nome e i falli commessi
const listaNomiFalli = nuovaLista.map((element) => {
  const { nome, falli } = element;
  return {
    nome,
    falli,
  };
});

// Stampa in console della lista Nomi e falli
console.log(listaNomiFalli);

// Seconda versione di stampa in console
listaNomiFalli.forEach((element) => {
  for (let key in element) {
    console.log(`${[key]}: ${element[key]}`);
  }
});
