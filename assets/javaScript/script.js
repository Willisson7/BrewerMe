var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08";
var submit = document.querySelector('.submit');
var cityInput = document.querySelector('.searchBox');
var stateInput = document.querySelector('#stateInput')
// Fetching current weather base on Coordinates

//Find City/Brewery Input
function coordinates(city) {
    var brewName = document.createElement('button')
    var brewPhone = document.createElement('p')
    var brewName1 = document.createElement('p')
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityInput.value.trim()}&by_state=${stateInput.value.trim()}&per_page=5`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.brewName').innerHTML="";
            console.log('Brewery', data)
            // check to see if data is null
            if (data && data.length != 0) {
                currentWeather(data[0].name)
                console.log(data[0].city)
                brewName.textContent = data[0].name
                document.querySelector('.brewName').append(brewName);
                brewPhone.textContent = data[0].phone
                brewPhone.classList.add('.none')
                brewName.addEventListener("click", () => brewPhone.classList = "")
                document.querySelector('.brewName').append(brewPhone)
                brewName1.textContent = data[1].name
                document.querySelector('.brewName').append(brewName1);
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




submit.addEventListener('click', function () {

    var input = document.querySelector('.searchBox').value
    document.getElementById("invis").classList.remove("hidden")
    console.log(input);
    coordinates(input);
})

