var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08";
var submit = document.querySelector('.submit');
var cityInput = document.querySelector('#searchBox');
// Fetching current weather base on Coordinates

//Find City/Brewery Input
function coordinates(city){
fetch(`https://api.openbrewerydb.org/breweries?by_city=` + city + `&per_page=1`)

.then((response) => response.json())
.then((data) => {
    console.log('Brewery', data)
        currentWeather(data[0].latitude, data[0].longitude)
        console.log(data[0].latitude, data[0].longitude)
    }
);
}
//Pass cityInput into weather fetch url
function currentWeather(lat, lon) {
    console.log("coordinates", lat, lon)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` + weatherAPI)
    
        .then((response) => response.json())
        .then((data) => {
            console.log('Weather', data)
    }
    );

}

submit.addEventListener('click', function() {
    var input = document.querySelector('#searchBox').value
    console.log(input);
    coordinates(input);
})


// on sumbit click, website passes user input into a fetch request to find city location
// Once Location is found, website passes location
// function findLocation(){

    
// submit.on('click', findLocation);
// }