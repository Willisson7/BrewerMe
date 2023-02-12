var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08";
var submit = document.querySelector('.submit');
var cityInput = document.querySelector('.searchBox');
var stateInput = document.querySelector('#stateInput')
// Fetching current weather base on Coordinates

//Find City/Brewery Input
function coordinates(city) {
    var brew1 = document.createElement('button')
    var brewPhone = document.createElement('p')
    var brew2 = document.createElement('button')
    var brew3 = document.createElement('button')
    var brew4 = document.createElement('button')
    var brew5 = document.createElement('button')
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${cityInput.value.trim()}&by_state=${stateInput.value.trim()}&per_page=5`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.brewName').innerHTML = "";
            // for (var i = 0; i < data.length; i++) {
            //     brewInfo();
            // }


                console.log('Brewery', data)

            // check to see if data is null
            if (data && data.length != 0) {
                currentWeather(data[0].name)
                console.log(data[0].city)
                brew1.textContent = data[0].name
                document.querySelector('#brew1').append(brew1);
                brewPhone.textContent = data[0].phone
                // brewPhone.classList.add('.none')
                // brewName.addEventListener("click", () => brewPhone.classList = "")
                document.querySelector('.brewName').append(brewPhone)

                brew1.textContent = data[0].name
                document.querySelector('#brew1').append(brew1);

                brew1.textContent = data[0].website_url
                document.querySelector('.brewDescription')

                brew2.textContent = data[1].name
                document.querySelector('#brew2').append(brew2)
                
                brew3.textContent = data[2].name
                document.querySelector('#brew3').append(brew3)

                brew4.textContent = data[3].name
                document.querySelector('#brew4').append(brew4)

                brew5.textContent = data[4].name
                document.querySelector('#brew5').append(brew5)





            }
            else {
                alert('City Not Found')
            }
        }
        );
}
//function to return brewInfo, url, street address, and phone number
// function brewInfo(data) {
//     info = data['website_url']
//     info.textContent = data[i];

//     document.querySelector('.brewName').append(info);
// }
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

