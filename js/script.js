

// recupero gli elementi dal DOM

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');
const row = document.querySelector('.row');
let data;
// creo una variabile d'apoggio

let isCLicked = false;
const daily = dailyBtn.innerText.toLowerCase();

// uso il metodo fetch per recuperare i dati dal file json
 fetch('/data.json').then((response) => {  
    if(!response.ok) return console.log('Oops! Something went wrong.');
    
    return response.json();
  }).then((data) => {
    data = data;
});

console.log(data);




// faccio un ciclo su data per stampare le card dinamicamente

data.forEach(d => {
    
    const card = `<div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <div class="category-icon">
              <h3>${d.title}</h3>
              <img src="images/icon-ellipsis.svg" alt="immagine dei tre puntini">
            </div>
            <div class="data-prev">
              <h2>${d.timeframes.daily.current}hrs</h2>
              <h4>Last Week - <span>${d.timeframes.daily.prev}hrs</span></h4>
            </div>
            </div>
        </div>`;
    row.innerHTML= card;
}

);


