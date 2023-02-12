const locationInputEl = document.querySelector("#location-input");
const cityListEl = document.getElementById('city-list');
const citySearchBtn = document.querySelector('.btn');

let cityInput;
let lon;
let lat;

const apiKey = '8f2f373cdd243b84ebc3cb3c2f92118f';
let currentWeatherUrl;


function displayWeather(cityArray, cityName) {
    let displayWeatherEl = document.getElementById('current-weather');

    console.log('cityArray');
    console.log(cityArray);

    let cityTitle = document.createElement('div');
    let cityHeader = document.createElement('h2');
    cityHeader.textContent = cityName;

    cityTitle.appendChild(cityHeader);
    displayWeatherEl.appendChild(cityTitle);
    

    for (let i = 0; i < cityArray.length; i += 7) {
        
            
        console.log(cityArray[i]);
        // let dailyWeather = document.createElement('div');
        // // listItem.textContent = docArray[index].weather;
        // displayWeatherEl.appendChild(dailyWeather);
        // console.log(forecastResponse[index]);
    }

    // fetch(getCurrentWeather)
    // .then(function(response){
    //     //convert to JSON object
    //     return response.json();
    // })
    // .then(function(data) {
    //     //display in HTML here

}
// let saveCities = function() {
//     localStorage.setItem("cities", JSON.stringify(cities));
//   };
// function forecastResponse(cityArray) {
//     cityArray = JSON.parse(localStorage.getItem("cities"));
// displayWeather(forecastResponse);

// *FETCH 
function getForecast(lat, lon, cityName) {
    let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    console.log('lat : ' + lat, 'lon : ' + lon);
    fetch(fiveDayUrl)
        .then(function (response) {
            if (!response.ok) {
                alert('dis sum 5day bullshit');
                throw response.json();
            }

            console.log(response);
            return response.json();
        })

        .then(function (data) {
            let cityArray = data.list;
            console.log(cityArray);
            displayWeather(cityArray, cityName);
            return cityArray;
        })
}
// function forecastResponse(cityArray) {
//     let forecastResponse = cityArray.toString;
//     console.log('forecastResponse from this other one');
//     console.log(forecastResponse);
//     // displayWeather(forecastResponse);
// }

function addCity(cityInput) {
    let listCity = $("<li>")
        .addClass('list-group-item list-group-item-action list-group-item-secondary')
        .text(cityInput);
    // let cityWeatherLink = $('<a>').attr('href', currentWeatherUrl);

    // append new city to div#city-list in html
    $("#city-list").append(listCity);
};

function getCurrentWeather(cityInput, lat, lon) {
    let currentWeatherUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + apiKey;
    fetch(currentWeatherUrl)
        .then(function (response) {
            if (!response.ok) {
                alert('dis sum bullshit');
                throw response.json();
            }
            return response.json();
        })

        .then(function (data) {
            cityName = data[0].name + ", " + data[0].state;
            lat = data[0].lat;
            lon = data[0].lon;

            console.log(cityName);
            // console.log(lon);
            getForecast(lat, lon, cityName);
            // getCurrentWeather(cityName);
            // return currentWeatherUrl;
            // for (let i = 0; i < data.length; i++) {
            //     //create a list element
            //     let cityListItem = $('<li>');
            //     cityListItem.textContent = data[i].html_url;
            // .attr('href', getCurrentWeather);

            // cityListItem.addClass("list-group-item list-group-item-action list-group-item-secondary");

            // let listCity = $("<span>")
            // .addClass('m-1')
            // .text(cityInput);

            // cityListItem.append(listCity);

            // // append new city to div#city-list in html
            // cityListEl.append(cityListItem);
            // // return cityInput;
        })
};

function formSubmitHandler(event, cityInput) {
    event.preventDefault();
    // get value from input element
    cityInput = locationInputEl.value.trim();

    if (!cityInput) {
        alert("Please enter a valid City");
        return;
    }
    //     locationInputEl.value = "";
    addCity(cityInput);
    getCurrentWeather(cityInput);
    console.log(cityInput + " : form handled!");
}

//** */ });


//   <li class="list-group-item">An item</li>
/* <span class="badge bg-secondary">New</span> */
{/* <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a> */ }


//* creating dynamic elements
// let text = $(this)
//  .text()
//  .trim();

//  let textInput = $("<textarea>")
//   .addClass("form-control")
//   .val(text);

// $(this).replaceWith(textInput);


//==============================================
// * LOCALSTORAGE




//===============================================
// * EVENT LISTENER

// render(locationInputEl.attr(placeholder));
citySearchBtn.addEventListener("click", formSubmitHandler);
// listCity.addEventListener('click', currentWeatherUrl)
