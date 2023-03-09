"use strict";

// Lista delle bici tramite un array di oggetti
const listaBici = [
  {
    modello: "Montain Bike",
    peso: 25,
  },
  {
    modello: "Bici da citta",
    peso: 12,
  },
  {
    modello: "Bici da campagna",
    peso: 18,
  },
  {
    modello: "Bici da corsa",
    peso: 10,
  },
  {
    modello: "Bici pieghevole",
    peso: 20,
  },
];

// Metto in una variabile il peso della prima bici
let [{ peso }] = listaBici;

// Ciclo tutti gli elementi e se trovo una bici più leggera mi salvo il peso
listaBici.forEach((element) => {
  if (element.peso < peso) {
    peso = element.peso;
  }
});

// Prendo la bici più leggere e la salvo in un array
const biciLeggera = listaBici.filter((element) => element.peso === peso);
// Salvo il nome del modello in una variabile
const [{ modello }] = biciLeggera;
// Stampo in console il nome del modello e il peso
console.log(`Modello: ${modello}, Peso: ${peso}kg`);

// Selezione degli elementi nel DOM
const foto = document.querySelectorAll("img");
const nome = document.querySelector(".nome");
const pesoBici = document.querySelector(".peso");

// Aggiunta al primo elemento la classe
let attivo = 0;
foto[attivo].classList.add("show");
nome.innerHTML = listaBici[attivo].modello;
pesoBici.innerHTML = listaBici[attivo].peso;

// Selezione del bottone avanti
const next = document.querySelector(".next");
// Evento del bottone avanti
next.addEventListener("click", function () {
  foto[attivo].classList.remove("show");
  if (attivo < listaBici.length - 1) {
    attivo++;
    foto[attivo].classList.add("show");
    nome.innerHTML = listaBici[attivo].modello;
    pesoBici.innerHTML = listaBici[attivo].peso;
  } else {
    attivo = 0;
    foto[attivo].classList.add("show");
    nome.innerHTML = listaBici[attivo].modello;
    pesoBici.innerHTML = listaBici[attivo].peso;
  }
});

// Selezione del bottone indietro
const prev = document.querySelector(".prev");

// Evento al bottone indietro
prev.addEventListener("click", function () {
  foto[attivo].classList.remove("show");
  if (attivo > 0) {
    attivo--;
    foto[attivo].classList.add("show");
    nome.innerHTML = listaBici[attivo].modello;
    pesoBici.innerHTML = listaBici[attivo].peso;
  } else {
    attivo = listaBici.length - 1;
    foto[attivo].classList.add("show");
    nome.innerHTML = listaBici[attivo].modello;
    pesoBici.innerHTML = listaBici[attivo].peso;
  }
});
