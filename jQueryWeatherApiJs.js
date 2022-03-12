// 
$(document).ready(function() {
    $('#submitbtn').click(function(event) {
        event.preventDefault();
        performsearch(event);
    });
});

function performsearch(event) {
    event.preventDefault();
    // console.log('event');
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        data: {
            q: $('#city').val(),
            appid: '5ff01867e827a8b3fa0e40b24bdb272d',
            units: 'metric',
        },
        success: function(response) {

            console.log(response);
            var getCityName = response.name;
            var getWeather = response.weather[0].main;
            var getTemp = response.main.temp;

            // set the value into the HTML
            $('.city-name').text("City Name is: " + getCityName);
            $('.city-weather').text("Weather is: " + getWeather);
            $('.city-temp').text("Temperature is: " + getTemp);
        },
        error: function() {
            alert('error is loading');
        }
    });
}

var jsons = ["Ali", "Junaid", "Dilbar", "Ali", "Dani"];

// JavaScript
jsons.forEach((jso) => {
    console.log(jso);
});

// JQuery
$.each(jsons, function(index, value) {
    console.log("This is Index: ", index, " and value is : ", value);
});