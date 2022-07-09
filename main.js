let searchBtn = document.getElementById('search-btn'),
 countryInp = document.getElementById('country-inp'),
 result = document.getElementById('result');

searchBtn.addEventListener('click',()=>{

let countryName = countryInp.value;

let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

fetch(finalURL)
.then(res => res.json())
.then(data =>{
    
result.innerHTML = `
    <img src = "${data[0].flags.svg}" class="flag-image" alt="${data[0].name.common}">

    <h2 class="">${data[0].name.common}</h2>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>

        </div>
        <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>

        </div>
        <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>

        </div>
        <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${Object.values(data[0].currencies)[0].name} - ${Object.keys(data[0].currencies)[0]}</span>

        </div>
        <div class="data-wrapper">
            <h4>Symbol:</h4>
            <span>${Object.values(data[0].currencies)[0].symbol}</span>

        </div>
        <div class="data-wrapper">
            <h4>Common Language:</h4>
            <span>${Object.values(data[0].languages).join('- ')}</span>

        </div>
    
    </div>

`
})
.catch(()=>{

    if(countryName.length ==0){
        result.innerHTML = `<h3 class="test">The input Cannot be empty</h3>`
    }else{
        result.innerHTML = `<h3 class="test">Please enter a valid country name</h3>`
    }
})


})