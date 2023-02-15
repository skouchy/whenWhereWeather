const locationInputEl = document.querySelector("#location-input");
const cityListEl = document.getElementById('city-list');
const citySearchBtn = document.querySelector('.btn');
let displayWeatherEl = document.getElementById('city-name');
let forecastEl = document.getElementById('5-day-forecast');

let cityInput;
let lon;
let lat;

const apiKey = '8f2f373cdd243b84ebc3cb3c2f92118f';
let currentWeatherUrl;


function displayWeather(cityName, cityArray) {
    displayWeatherEl.innerHTML= "";
    displayWeatherEl.append(cityName);
    
    let renderTodayDate = document.getElementById('date');
    // let renderIcon = document.querySelector('.icon');
    let renderTodayTemp = document.getElementById('temp');
    let renderTodayHumid = document.getElementById('humidity');
    let renderTodayWind = document.getElementById('wind-speed');
    
    
    for (let i = 0; i < cityArray.length; i += 7) {
        let weatherObj = {
            date: cityArray[i].dt_txt.split(' ')[0],
            icon: cityArray[i].weather[0].icon,
            temp: cityArray[i].main.temp,
            humid: cityArray[i].main.humidity,
            wind: cityArray[i].wind.speed,    
            
        }

        if(i===0){
        renderTodayDate.innerHTML = "Date:  " + weatherObj.date;
        renderTodayTemp.innerHTML = "Temperature:  " + weatherObj.temp;
        renderTodayHumid.innerHTML = "Humidity:  " + weatherObj.humid;
        renderTodayWind.innerHTML = "Wind Speed:  " + weatherObj.wind;
        }
        
        // getIcon(weatherObj.icon)
        // return
        console.log(weatherObj.date);
    }
};
// weatherObj.icon = 


// function getIcon(weatherObj) {
//     let iconUrl = "https://openweathermap.org/img/wn/" + weatherObj.icon + "@2x.png";
//     fetch(iconUrl)
//         .then(function (response) {
//             // if (!response.ok) {
//             //     alert("dang, no cartoons");
//             //     throw response.json();
//             // }
//             console.log(response);
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//         })
// };

// let formatDate = date[1] + "/" + date[2] + "/" + date[0];

// date[0] = renderTodayDate.innerHTML;
// // dailyContent.appendChild(formatDate);


// let temp = ;
// temp.textContent = dailyText.innerHTML;
// dailyContent.appendChild(dailyText);
// console.log(dailyContent + 'p2');
// dailyText.textContent.appendSibling()


// console.log(date);

// let dailyWeather = document.createElement('div');
// // listItem.textContent = docArray[index].weather;
// displayWeatherEl.appendChild(dailyWeather);
// console.log(forecastResponse[index]);



// fetch(getCurrentWeather)
// .then(function(response){
//     //convert to JSON object
//     return response.json();
// })
// .then(function(data) {
//     //display in HTML here


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
            displayWeather(cityName, cityArray);
            return cityArray;
        })
};


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
            getForecast(lat, lon, cityName);

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
