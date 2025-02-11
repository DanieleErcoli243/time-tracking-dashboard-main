// recupero gli elementi dal DOM

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

// creo le variabili utili

let isCLicked = false;
const baseUri = 'http://http://127.0.0.1:5500/';
const endpoint = 'data.json';
