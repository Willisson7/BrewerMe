var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08";
var submit = document.querySelector('.submit');
var cityInput = document.querySelector('.searchBox');
var stateInput = document.querySelector('#stateInput')
var backBtn = document.querySelector('.return');
var aboutBtn = document.querySelector('.devPage');
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
            }
            else{      
                document.getElementById("invis").classList.add("hidden")
                document.querySelector('.failed').classList.remove("hidden")
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

    if(brewPhone == null){
        brewPhone = "Not Available";
    }
    if(brewWeb == null){
        brewWeb = "Not Available";

    }

    var line = document.createElement('p')
    line.className = "line";
    line.innerHTML = "Brewery Name: " + brewName + "<br>" + "Phone Number: " + brewPhone + "<br>" + "Website Link: <a href=\"" + brewWeb + "\">" + brewWeb +"</a>";

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
                suggested.textContent = "☀️The sun is out! Try a flavorful Kolsch☀️"
                sunnyImg.classList.remove("hidden")
            }
            else if (clouds == "few clouds") {
                suggested.textContent = "☀️The sun is out! Why not try a Witbier from a local brewery?☀️"
                sunnyImg.classList.remove("hidden")
            }
            else if (clouds == "scattered clouds") {
                suggested.textContent = "⛅Looks like the sun should be peaking through, can't go wrong with a Lager!⛅"
                cloudyImg.classList.remove("hidden")
            }
            else if (clouds == "broken clouds") {
                suggested.textContent = "⛅Looks like the sun should be peaking through, and there should be a nice cold IPA should do the trick!⛅"
                cloudyImg.classList.remove("hidden")
            }
            else if (clouds == "shower rain") {
                suggested.textContent = "🌧️Might want to take a rain check... SIKE it is just water! Safely go out and try a local Gose!🌧️"
                rainImg.classList.remove("hidden")
            }
            else if (clouds == "rain") {
                suggested.textContent = "🌧️Might want to take a rain check... SIKE it is just water! Safely go out and grab a nice Hefeweizen!🌧️"
                rainImg.classList.remove("hidden")
            }
            else if (clouds == "thunderstorm") {
                suggested.textContent = "🌧️Might want to take a rain check... SIKE it is just water! Safely go out and try a glass of Hefeweizen !🌧️"
                rainImg.classList.remove("hidden")
            }
            else if (clouds == "snow") {
                suggested.textContent = "🌧️Might want to take a rain check... SIKE it is just water! Safely go out and grab a Saison!🌧️"
                rainImg.classList.remove("hidden")
            }
            else {
                suggested.textContent = "🌧️Might want to take a rain check... SIKE it is just water! Safely go out and try some local Mead!🌧️"
                rainImg.classList.remove("hidden")
            }
        }
        );
}

aboutBtn.addEventListener('click', function(){
    document.querySelector(".searchMe").classList.add("hidden")
    document.getElementById("invis").classList.add("hidden")
    document.querySelector('.developers').classList.remove("hidden")
})

submit.addEventListener('click', function (event) {

    var input = document.querySelector('.searchBox').value
    document.querySelector('.brewHeader').classList.remove("hidden")
    document.getElementById("invis").classList.remove("hidden")
    document.querySelector(".searchMe").classList.add("hidden")
    console.log(input);
    coordinates(input);
    
})

