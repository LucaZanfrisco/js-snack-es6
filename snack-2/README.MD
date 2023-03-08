# SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l’elenco degli studenti: 

| Id  |        Name      | Grades |
| :---: |  :----------:  | :----: |
| 213 | Marco della Rovere   | 78 |  
| 110 | Paola Cortellessa    | 96 | 
| 250 | Andrea Mantegna      | 48 | 
| 145 | Gaia Borromini       | 74 | 
| 196 | Luigi Grimaldello    | 68 | 
| 102 | Piero della Francesca| 50 | 
| 120 | Francesca da Polenta | 84 | 

---

# Svolgimento

- Creo un elenco di studenti alla quale attribuisco `id, nome, somma voti`
- Prendo dalla lista originale tutti i nome e li aggiungo ad una lista dove avranno tutti i nomi scritti in maiuscolo
- Partendo dalla lista originale creo un'altra lista in base alla quale inserirò soltato gli studenti con una somma di voti maggiore di 70
- Infine sempre dalla lista orginale creo un'ulteriore lista dove inserire gli sutdenti in base a due criteri, se hanno la somma dei voti maggiori di 70 e se il loro id è superiore a 120