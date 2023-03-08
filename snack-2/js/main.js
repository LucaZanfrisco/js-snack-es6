"use strict";

// FUNZIONI
const targa = (listaStudenti) => {
  // Creazione della lista delle targhe con tutti i nomi in maiuscolo
  const targaStudente = listaStudenti.map((element) => {
    const targa = element.nome.toUpperCase();
    return targa;
  });
  return targaStudente;
};

const voti = (listaStudenti) => {
  //Creazione di una lista in base al voto degli studenti
  const listaVoto = listaStudenti.filter((element) => {
    if (element.voto >= 70) {
      return true;
    }
    return false;
  });
  return listaVoto;
};

const votiId = (listaStudenti) => {
  //Crazione della lista in base al voto e all'id
  const listaVotoId = listaStudenti.filter((element) => {
    if (element.voto >= 70 && element.id >= 120) {
      return true;
    }
    return false;
  });
  return listaVotoId;
};


// MAIN

// Array di oggetti (lista degli studenti)
const listaStudenti = [
  {
    id: 213,
    nome: "Marco della Rovere",
    voto: 78,
  },
  {
    id: 100,
    nome: "Paolo Cortellessa",
    voto: 96,
  },
  {
    id: 250,
    nome: "Andrea Mantegna",
    voto: 48,
  },
  {
    id: 145,
    nome: "Gaia Borromini",
    voto: 74,
  },
  {
    id: 196,
    nome: "Luigi Grimaldello",
    voto: 68,
  },
  {
    id: 102,
    nome: "Piero della Francesca",
    voto: 50,
  },
  {
    id: 120,
    nome: "Francesca da Polentta",
    voto: 84,
  },
];

// Chiamata alla funzione della targa
const targaStudente = targa(listaStudenti);
console.log(targaStudente);

// Chiamata alla funzione del voto
const listaVoto = voti(listaStudenti);
console.log(listaVoto);

// Chiamata alla funzione del voto e id
const listaVotoId = votiId(listaStudenti);
console.log(listaVotoId);
