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
        // check to see if data is null
        if (data && data.length != 0){
            currentWeather(data[0].name)
            console.log(data[0].city)
        }
        else {
            alert('City Not Found')
        }
    }
);
}
//Pass cityInput into weather fetch url
function currentWeather(city) {
    console.log("coordinates")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${weatherAPI}`)
    
        .then((response) => response.json())
        .then((data) => {
            console.log('Weather', data)
        }
    );
}

submit.addEventListener('click', function() {
    var input = document.querySelector('#searchBox').value
    document.getElementById("invis").classList.remove("hidden")
    console.log(input);
    coordinates(input);
})


