
document.querySelector("#searchCityButton").addEventListener("click", () => {
    var searchCity = document.querySelector("#searchCity").value
    console.log(searchCity)
    getGeo(searchCity)
})

function getGeo(cityValue) {
    fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&appid=604bb90009d2c2eedf41eec0044eb20a`)
    .then(reponse => reponse.json())
    .then(data => { console.log(data)
    
    getWeather(data[0].lat, data[0].lon)
    })
}

function getWeather(lat, lon) {
    fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=604bb90009d2c2eedf41eec0044eb20a&units=imperial`)
    .then(reponse => reponse.json())
    .then(data => { console.log(data)
    var currentTemp = data.current.temp
    var currentTempDiv = document.querySelector("#temp")
    currentTempDiv.append("Current temp: "+ Math.floor(currentTemp))
    var currentWindSpeed = data.current.wind_speed
    var currentWindSpeedDiv = document.querySelector("#wind")
    currentWindSpeedDiv.append("Wind Speed: " + currentWindSpeed)
    var currentHumidity = data.current.humidity
    var currentHumidityDiv = document.querySelector("#humidity")
    currentHumidityDiv.append("Humidity: " +currentHumidity)
    var currentUvi = data.current.uvi
    var currentUviDiv = document.querySelector("#uvi")
    currentUviDiv.append("Uvi: " + currentUvi)
    var currentWeather = data.current.weather[0].main

    switch (currentWeather) {
        case 'Clouds': 
        var currentWeatherIMG = "clouds.png"
        break;
        case 'Clear': 
        var currentWeatherIMG = "sun.png"
        break;
        case 'Rain': 
        var currentWeatherIMG = "thunderstorm.png"
        break;
        default: 
        var currentWeatherIMG = "clouds.png"
    } 

    img = document.createElement("img")
    img.setAttribute("src", "images/" + currentWeatherIMG)
    var currentIMGDiv = document.querySelector("#conditions")
    currentIMGDiv.append(img)


    for (i=1;i<6;i++){
        var dailyTemp = data.daily[i].temp.day
        var dailyTempDiv = document.querySelectorAll("#temp")[i]
        dailyTempDiv.append("Current temp: "+ Math.floor(dailyTemp))
        var dailyWindSpeed = data.daily[i].wind_speed
        var dailyWindSpeedDiv = document.querySelectorAll("#wind")[i]
        dailyWindSpeedDiv.append("Wind Speed: " + dailyWindSpeed)
        var dailyHumidity = data.daily[i].humidity
        var dailyHumidityDiv = document.querySelectorAll("#humidity")[i]
        dailyHumidityDiv.append("Humidity: " +  dailyHumidity)
        var dailyUvi = data.daily[i].uvi
        var  dailyUviDiv = document.querySelectorAll("#uvi")[i]
        dailyUviDiv.append("Uvi: " + dailyUvi)
        var dailyWeather = data.daily[i].weather[0].main

        switch (dailyWeather) {
            case 'Clouds': 
            var currentWeatherIMG = "clouds.png"
            break;
            case 'Clear': 
            var currentWeatherIMG = "sun.png"
            break;
            case 'Rain': 
            var currentWeatherIMG = "thunderstorm.png"
            break;
            default: 
            var currentWeatherIMG = "clouds.png"
        } 

        img = document.createElement("img")
        img.setAttribute("src", "images/" + currentWeatherIMG)
        var currentIMGDiv = document.querySelectorAll("#conditions")[i]
        currentIMGDiv.append(img)

    }

    })

  

}