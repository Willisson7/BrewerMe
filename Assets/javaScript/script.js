var willisAPI = "6040b55b9139f3c39b946cd8cf88aa08"

// Fetching current weather base on Coordinates
function drinkingWeather(lat, lon){

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=` + willisAPI)
    
.then((response) => response.json())
.then((data) => {
        console.log('Weather', data)
        findBrewery(data[0].lat, data[0].lon);

        }  
    );
}


function findBrewery(){
fetch(`https://api.openbrewerydb.org/breweries?by_city=` + city+ `&per_page=3`)

.then((response) => response.json())
.then((data) => console.log('Brewery', data));
}


// on sumbit click, website passes user input into a fetch request to find city location
// Once Location is found, website passes location
// function findLocation(){

  
    
    
// submit.on(findLocation);
// }