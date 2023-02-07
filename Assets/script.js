var weatherAPI = "6040b55b9139f3c39b946cd8cf88aa08"

fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.5297010&lon=-81.2185749&appid=' + weatherAPI)
    
.then((response) => response.json())
.then((data) => console.log(data));









// function findLocation(){
//     var local = $('.Location')
//     var brewery = $.get(api' + userInput + 'fo=JSON)

//     fetch.brewery
    
    
    
    
//     local.on(findLocation);
// }