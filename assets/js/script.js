let cityInputEl = document.querySelector("#city-input");
const citySearchBtn = document.querySelector('.btn');
let displayWeatherEl = document.getElementById('city-name');
let forecastEl = document.getElementById('5-day-forecast');

let cityInput;
let lon;
let lat;

const apiKey = '8f2f373cdd243b84ebc3cb3c2f92118f';
let currentWeatherUrl;

// ================================================
// * Render Data to Page 

function displayWeather(cityName, weatherDataArr) {
    displayWeatherEl.innerHTML = "";
    forecastEl.innerHTML= "";
    displayWeatherEl.append(cityName);

    let renderTodayDate = document.getElementById('date');
    let renderIcon = document.querySelector('.icon');
    let renderTodayTemp = document.getElementById('temp');
    let renderTodayHumid = document.getElementById('humidity');
    let renderTodayWind = document.getElementById('wind-speed');

    // * Setting Weather Data into single day Object based on 3hr forecast of Array(40)
    for (let i = 0; i < weatherDataArr.length; i += 8) {
        let weatherOfIndex = weatherDataArr[i];
        let weatherObj = {
            date: weatherOfIndex.dt_txt.split(' ')[0],
            icon: weatherOfIndex.weather[0].icon,
            temp: weatherOfIndex.main.temp,
            humid: weatherOfIndex.main.humidity,
            wind: weatherOfIndex.wind.speed,

        }

        // * Weather Icon Image
        let weatherIconURL = "https://openweathermap.org/img/wn/" + weatherOfIndex.weather[0].icon + ".png";

        if (i === 0) {
            renderTodayDate.innerHTML = weatherObj.date;
            renderTodayTemp.innerHTML = "Temperature:  " + weatherObj.temp;
            renderIcon.innerHTML = renderIcon.setAttribute('src', weatherIconURL);
            renderTodayHumid.innerHTML = "Humidity:  " + weatherObj.humid + "%";
            renderTodayWind.innerHTML = "Wind Speed:  " + weatherObj.wind + "mph";
        }


        // * Creating Forecast Elements Dynamically
        let forecastData = [
            document.createElement('li'),
            document.createElement('li'),
            document.createElement('li'),
            document.createElement('li'),
        ]

        forecastData[0].innerHTML = weatherObj.date;
        forecastData[1].innerHTML = ('Temp: ' + weatherObj.temp);
        forecastData[2].innerHTML = ('Wind: ' + weatherObj.wind + "mph");
        forecastData[3].innerHTML = ('Humidity: ' + weatherObj.humid + "%");


        let cardImage = document.createElement('img');
        cardImage.setAttribute('class', 'card-img-top');
        cardImage.setAttribute('src', weatherIconURL);

        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', 'card');
        cardEl.appendChild(cardImage);

        let forecastCard = document.createElement('ul');
        forecastCard.setAttribute('class', 'card-body');
        cardEl.appendChild(forecastCard);
        forecastCard.append(...forecastData);

        forecastEl.appendChild(cardEl);

    }
};

// ====================================================
// * Add City Search History List

function addCity(cityInput) {
    var cityLi = $('<button>').attr('type', 'data').text(cityInput);

    cityLi.on('click', function () {
        getGeoCoord(cityInput);
    });
    
    $('#city-list').append(cityLi);
};

// ======================================================
// * FETCH 

function getForecast(lat, lon, cityName) {
    let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    console.log('lat : ' + lat, 'lon : ' + lon);
    fetch(fiveDayUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            currentWeatherUrl = response.url;
            return response.json();
        })

        .then(function (data) {
            let weatherDataArr = data.list;
            displayWeather(cityName, weatherDataArr);
            return cityName, weatherDataArr;
        })

};



function getGeoCoord(cityInput, lat, lon) {
    let getGeoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + apiKey;
    fetch(getGeoUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })

        .then(function (data) {
            let cityName = data[0].name + ", " + data[0].state;
            lat = data[0].lat;
            lon = data[0].lon;

            getForecast(lat, lon, cityName);

        })
};

//============================================
// * Form Input

function formSubmitHandler(event, cityInput) {
    event.preventDefault();
    cityInput = cityInputEl.value.trim();

    if (!cityInput) {
        alert("Please enter a valid City");
        return;
    }
    addCity(cityInput); //Sending text format for search City history

    cityInputEl.value = "";
    getGeoCoord(cityInput);
}


//===============================================
// * EVENT LISTENER

citySearchBtn.addEventListener("click", formSubmitHandler);

