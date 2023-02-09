let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
const locationInputEl = document.querySelector("#location-input");
const citySearchBtn = document.querySelector('.btn');
let cityInput;


let formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    cityInput = locationInputEl.value.trim();

    if (cityInput) {
        //     locationInputEl.value = "";
        addCity();
    } else {
        alert("Please enter a valid City");
    }
};

// creating list items dynamically
let addCity = function (append) {
    let cityWeatherLink = $('<a>').attr('href', apiUrl);

    cityWeatherLink.addClass("list-group-item list-group-item-action list-group-item-secondary");

    let cityText = $("<span>")
        .addClass('m-1')
        .text(cityInput);

    cityWeatherLink.append(cityText);

    // append new city to div#city-list in html
    $("#city-list").append(cityWeatherLink);
};

// let getCityWeather = function (user) {
//   // format the github api url

//   // make a request to the url
//   fetch(apiUrl).then(function (response) {
//     response.json().then(function (data) {
//       console.log(data);
//     });
//   });
// };

// citySearchFormEl.addEventListener("submit", formSubmitHandler);

// *FETCH 
// let getCityWeather = function () {
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

citySearchBtn.addEventListener("click", formSubmitHandler);
