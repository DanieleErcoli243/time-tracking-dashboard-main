const fetchData = async (baseUri, endpoint) => { 
    fetch('/data.json').then((response) => {  
        if(!response.ok) return console.log('Oops! Something went wrong.');
        
        return response.json();
      }).then((data) => {
        console.log(data);
      });
};

// recupero gli elementi dal DOM

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

// creo le variabili utili

let isCLicked = false;
const baseUri = 'http://http://127.0.0.1:5500/';
const endpoint = 'data.json';

// provo a fare la chiamata 

fetchData();