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
let [{peso}] = listaBici;

// Ciclo tutti gli elementi e se trovo una bici più leggera mi salvo il peso
listaBici.forEach((element) => {
    if(element.peso < peso){
        peso = element.peso;
    }
});

// Prendo la bici più leggere e la salvo in un array
const biciLeggera = listaBici.filter(element => element.peso === peso);
// Salvo il nome del modello in una variabile
const [{modello}] = biciLeggera;
// Stampo in console il nome del modello e il peso
console.log(`Modello: ${modello}, Peso: ${peso}kg`);


