const fetchData = async () => { 
    // uso il metodo fetch per recuperare i dati dal file json
     fetch('/data.json').then((response) => {  
        if(!response.ok) return console.log('Oops! Something went wrong.');
        
        return response.json();
      }).then((data) => {
        return data
        console.table(data);
    });
    
};

// recupero gli elementi dal DOM

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

// creo una variabile d'apoggio

let isCLicked = false;
const daily = dailyBtn.innerText.toLowerCase();


// provo a fare la chiamata 

const data = fetchData();


// faccio un ciclo su data per stampare le card dinamicamente

data.forEach(d => {
    console.log(daily);
    const card = `<div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <div class="category-icon">
              <h3>${d.title}</h3>
              <img src="images/icon-ellipsis.svg" alt="immagine dei tre puntini">
            </div>
            <div class="data-prev">
              <h2>${d.timeframes}</h2>
              <h4>Last Week - <span>7hrs</span></h4>
            </div>
            </div>
        </div>`
});