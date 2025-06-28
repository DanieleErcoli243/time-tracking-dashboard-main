
// recupero gli elementi dal DOM

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');
const row = document.querySelector('.row');
let jsonData;
// creo una variabile d'apoggio

let isCLicked = false;
let cards = ``;
const daily = dailyBtn.innerText.toLowerCase();

// uso fetch per richiamare i dati
fetch('/data.json').then((response) => {  
  if(!response.ok) return console.log('Oops! Something went wrong.');
  
  return response.json();
}).then((data) => {
  jsonData = data;
});


// aggancio un ascoltatore di eventi al bottone per mostrare le card

dailyBtn.addEventListener('click', () => {
  weeklyBtn.classList.remove('active');
  dailyBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
  // faccio un ciclo su data per stampare le card dinamicamente
  
  console.log(jsonData);
  jsonData.forEach(d => {
      
       cards = `<div class="col">
       <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <div class="category-icon">
                <h3>${d.title}</h3>
                <img src="images/icon-ellipsis.svg" alt="immagine dei tre puntini">
              </div>
              <div class="data-prev">
                <h2>${d.timeframes.daily.current}hrs</h2>
                <h4>Last Week - <span>${d.timeframes.daily.previous}hrs</span></h4>
              </div>
              </div>
          </div>
          </div>`;
      row.innerHTML = cards;
  }
  
  );
});

weeklyBtn.addEventListener('click', () => {
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.add('active');
  monthlyBtn.classList.remove('active');
    // faccio un ciclo su data per stampare le card dinamicamente
    
    jsonData.forEach(d => {
        
        cards += `<div class="col">
        <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <div class="category-icon">
                  <h3>${d.title}</h3>
                  <img src="images/icon-ellipsis.svg" alt="immagine dei tre puntini">
                </div>
                <div class="data-prev">
                  <h2>${d.timeframes.weekly.current}hrs</h2>
                  <h4>Last Week - <span>${d.timeframes.weekly.previous}hrs</span></h4>
                </div>
                </div>
            </div>
            </div>`;
        row.innerHTML = cards;
    }
    
    );
});

monthlyBtn.addEventListener('click', () => {
  dailyBtn.classList.remove('active');
  weeklyBtn.classList.remove('active');
  monthlyBtn.classList.add('active');
  
  
    // faccio un ciclo su data per stampare le card dinamicamente
    
    jsonData.forEach(d => {
        
        cards = `<div class="col">
                  <div class="card">
                    <div class="card-header"></div>
                    <div class="card-body">
                      <div class="category-icon">
                        <h3>${d.title}</h3>
                        <img src="images/icon-ellipsis.svg" alt="immagine dei tre puntini">
                      </div>
                      <div class="data-prev">
                        <h2>${d.timeframes.monthly.current}hrs</h2>
                        <h4>Last Week - <span>${d.timeframes.monthly.previous}hrs</span></h4>
                      </div>
                    </div>
                  </div>
                </div>`;
        row.innerHTML = cards;
    }
    
    );
})


