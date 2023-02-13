var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08";
var submit = document.querySelector('.submit');
var cityInput = document.querySelector('.searchBox');
var stateInput = document.querySelector('#stateInput')
// Fetching current weather base on Coordinates

//Find City/Brewery Input
function coordinates(city) {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityInput.value.trim()}&by_state=${stateInput.value.trim()}&per_page=5`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.brewName').innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                let results = brewInfo(data[i]);
                // console.log("look here!", results
            }
            console.log('Brewery', data)

            // check to see if data is null
            if (data && data.length != 0) {
                currentWeather(data[0].name)
                console.log(data[0].city)
            }
            else {
                alert('City Not Found')
            }
        }
        );
}
//function to return brewInfo, url, street address, and phone number
function brewInfo(dataElement) {
    var brewClass = document.querySelector(".brewName")
    var brewName = dataElement.name
    var brewPhone = dataElement.phone
    var brewWeb = dataElement.website_url

    var line = document.createElement('p')
    line.className = "line";
    line.innerHTML = brewName + "<br>" + brewPhone + "<br>" + brewWeb;

    document.querySelector(".brewName").append(line);
    // console.log("Look Here", dataElement.name, dataElement.phone, dataElement.website_url)
}
// Pass cityInput into weather fetch url
function currentWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${weatherAPI}`)

        .then((response) => response.json())
        .then((data) => {
            console.log('Weather', data)
            var clouds = data.weather[0].description
            var suggested = document.getElementById('weatherSuggestion')
            var rainImg = document.getElementById("rainPic")
            var sunnyImg = document.getElementById("sunnyPic")
            var cloudyImg = document.getElementById("cloudyPic")
            console.log(clouds)
            if (clouds == "clear sky") {
                suggested.textContent = "The sun is out! So are you drinking a beer yet?"
                sunnyImg.classList.remove("hidden")
            }
            else if (clouds == "few clouds") {
                suggested.textContent = "The sun is out! So are you drinking a beer yet?"
                sunnyImg.classList.remove("hidden")
            }
            else if (clouds == "scattered clouds") {
                suggested.textContent = "Looks like the sun should be peaking through, and there should be a nice cold beer in your hand!"
                cloudyImg.classList.remove("hidden")
            }
            else if (clouds == "broken clouds") {
                suggested.textContent = "Looks like the sun should be peaking through, and there should be a nice cold beer in your hand!"
                cloudyImg.classList.remove("hidden")
            }
            else if (clouds == "shower rain") {
                suggested.textContent = "Might want to take a rain check... SIKE it is just water! Safely go out and grab a nice brewsky!"
                rainImg.classList.remove("hidden")
            }
            else if (clouds == "rain") {
                suggested.textContent = "Might want to take a rain check... SIKE it is just water! Safely go out and grab a nice brewsky!"
                rainImg.classList.remove("hidden")
            }
            else if (clouds == "thunderstorm") {
                suggested.textContent = "Might want to take a rain check... SIKE it is just water! Safely go out and grab a nice brewsky!"
                rainImg.classList.remove("hidden")
            }
            else if (clouds == "snow") {
                suggested.textContent = "Might want to take a rain check... SIKE it is just water! Safely go out and grab a nice brewsky!"
                rainImg.classList.remove("hidden")
            }
            else {
                suggested.textContent = "Might want to take a rain check... SIKE it is just water! Safely go out and grab a nice brewsky!"
                rainImg.classList.remove("hidden")
            }
        }
        );
}
submit.addEventListener('click', function () {

    var input = document.querySelector('.searchBox').value
    document.getElementById("invis").classList.remove("hidden")
    document.querySelector(".searchMe").classList.add("hidden")
    console.log(input);
    coordinates(input);
})

