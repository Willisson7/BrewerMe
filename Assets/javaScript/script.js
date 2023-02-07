var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08"

// Fetching current weather base on Coordinates
fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.5297010&lon=-81.2185749&appid=' + weatherAPI)
    
.then((response) => response.json())
.then((data) => console.log('Weather', data));

fetch('https://api.openbrewerydb.org/breweries?by_city=phoenix&per_page=3')

.then((response) => response.json())
.then((data) => console.log('Brewery', data));


// on sumbit click, website passes user input into a fetch request to find city location
// Once Location is found, website passes location
// function findLocation(){

 
    
    
    
// submit.on(findLocation);
// }