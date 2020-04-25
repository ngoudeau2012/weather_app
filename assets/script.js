var searchCity=""
$(".btn").on("click",function(){
    //Running the initial search
    searchCity = $("input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=87ccf6bee6059963f3a267ce98ef3eba"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // Getting all Variables needed for next call
        console.log(response)

        var lon = response.coord.lon
        var lat = response.coord.lat
        console.log("Lon= "+ lon);
        console.log("Lat= "+ lat);
        
        getWeatherData(lat,lon)
    })
})

// current and forecast weather data ajax call
function getWeatherData(latitude,longitude){

    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=87ccf6bee6059963f3a267ce98ef3eba"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)

        var temperature = response.current.temp;
        var humid = response.current.humidity;
        var windSpeed = response.current.wind_speed;
        var uvIndex = response.current.uvi;
        var currentDate = response.current.dt
        var currentIcon = response.current.weather[0].icon

        printCurrentData(searchCity,temperature, humid, windSpeed, uvIndex,currentDate,currentIcon);

        for(i=1;i<6; i++){
            var fWeatherIcon = response.daily[i].weather[0].icon;
            var fTemp = response.daily[i].temp.day;
            var fHumid = response.daily[i].humidity;
            var fDate = response.daily[i].dt;

            getDate(fDate)
            console.log(fWeatherIcon);
            console.log(fTemp);
            console.log(fHumid);
            console.log(convertData1);

            $("#date"+[i]).text(convertData1);
            $("#img"+[i]).attr("src","http://openweathermap.org/img/wn/" + fWeatherIcon + ".png");
            $("#temp"+[i]).text("Temp: "+fTemp);
            $("#humid"+[i]).text("Humidity: " + fHumid + "%");

        }


    })
}

function printCurrentData(city,temp,hum,wind,uv,dt,icon){
    getDate(dt)
    $("#cityWeather").text(city + " (" + convertData1 + ")")
    $("#imgCurrent").attr("src", "http://openweathermap.org/img/wn/" + icon + ".png")
    $("#temp").text("Temperature: " + temp + " °F");
    $("#humidity").text("Humidity: " + hum + "%");
    $("#windSpeed").text("Wind Speed: " + wind + " mph")
    $("#uvIndex").text("UV Index: " + uv);

    
}

function getDate(unixTime){
    var months_arr = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var date = new Date(unixTime*1000);
    var year = date.getFullYear();
    var month = months_arr[date.getMonth()];
    var day = date.getDate();
    
    var convertData = month + '/' + day + '/' + year;
    window.convertData1 = convertData;
}