const locationInputEl = document.querySelector("#location-input");
const cityListEl = document.getElementById('city-list');
const citySearchBtn = document.querySelector('.btn');

let cityInput;
let lon;
let lat;

const apiKey = '8f2f373cdd243b84ebc3cb3c2f92118f';
let currentWeatherUrl;


function formSubmitHandler(event, cityInput) {
    event.preventDefault();
    // get value from input element
    cityInput = locationInputEl.value.trim();

    if (cityInput) {
        //     locationInputEl.value = "";
        addCity(cityInput);
        getCurrentWeather(cityInput);
        console.log(cityInput + " : form handled!")
        return cityInput;
    } else {
        alert("Please enter a valid City");
    }
};


// *FETCH 
function getForecast(lat, lon) {
    let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    console.log('lat : ' + lat,'lon : ' + lon);
    fetch(fiveDayUrl).then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
        })
    })
}

// function getCurrentWeather(cityInput) {
//     console.log(cityInput);
// creating list items dynamically
function addCity(cityInput) {
    console.log(cityInput);
    // getCurrentWeather();
    let listCity = $("<li>")
        .addClass('m-1')
        .text(cityInput);
    let cityWeatherLink = $('<a>').attr('href', currentWeatherUrl);

    listCity.addClass("list-group-item list-group-item-action list-group-item-secondary");

        

    listCity.append(cityWeatherLink);

    // append new city to div#city-list in html
    $("#city-list").append(listCity);
    // return cityInput;
};

function getCurrentWeather(cityInput, lat, lon) {
    let currentWeatherUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + apiKey;
    fetch(currentWeatherUrl)
        .then(function (response) {
            console.log(response);
            if (response.ok) {
                response.json().then(function (data) {
                    lat = data[0].lat;
                    lon = data[0].lon;
                    
                    // console.log(lat);
                    // console.log(lon);
                    getForecast(lat, lon);
                    return currentWeatherUrl;
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
                
            } else {
                alert('dis sum bullshit');
            }
        })
};
// response.json().then(function (data) {
//     console.log(data.response);
// })
//     })
// }
// **let getCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + apiKey;
// let displayWeatherEl = document.getElementById('render-weather');

// fetch(getCurrentWeather)
// .then(function(response){
//     //convert to JSON object
//     return response.json();
// })
// .then(function(data) {
//     //display in HTML here
//     let cityArray = data.response.city;
//     for (let index = 0; index < cityArray.length; index++) {
//         let listItem = document.createElement('li');
//         listItem.textContent = docArray[index].weather;
//         listEl.appendChild(listItem);
//     }
// })
// .catch(function(error){
//     //in case there is an error
//     console.log(error);
//** */ });


// function statusErr(badRequestUrl) {
//     fetch(badRequestUrl).then(function (response) {
//         if (response.status !== 200) {
//             // document.location.replace('./404.html')
//             console.log(response.status)
//         } else {
//             return response.json();

//         }
//     });
// }
// function getCityWeather(cityInput) {
//     let geoCodeUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

//     fetch(geoCodeUrl).then(function(response){
//     response.json().then(function(data){
//         console.log(data);
//     })    
// });
// }

//     });   
// }

//ORRRRR

//     // fetch("https://api.github.com/users/octocat/repos");
//     // let response = fetch("https://api.github.com/users/octocat/repos");
//     // console.log(response);

//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     });
//   }
//   citySearchFormEl.addEventListener("submit", formSubmitHandler);

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

//*Getting unknown object inputs
// tasks[status][index].text = text;
// saveTasks();
// // FOR REFERENCE
// text = "Walk the dog";
// status = "toDo";
// index = 0;

//==============================================
// * LOCALSTORAGE

// let saveCities = function() {
//     localStorage.setItem("cities", JSON.stringify(cities));
//   };

//   let loadCities = function() {
//     cities = JSON.parse(localStorage.getItem("cities"));

//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!cities) {
//       cities = {
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
//   };

//===============================================
// * EVENT LISTENER

// render(locationInputEl.attr(placeholder));
citySearchBtn.addEventListener("click", formSubmitHandler);

