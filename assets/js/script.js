// *FETCH 
// var getUserRepos = function () {
//     // fetch("https://api.github.com/users/octocat/repos");
//     // var response = fetch("https://api.github.com/users/octocat/repos");
//     // console.log(response);
  
//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     });
//   }
//   getUserRepos();

// *creating list items dynamically
// var createTask = function(taskText, taskDate, taskList) {
//     // create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
  
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
  
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);
  
//     // append span and p element to parent li
//     taskLi.append(taskSpan, taskP);
  
  
//     // append to ul list on the page
//     $("#list-" + taskList).append(taskLi);
//   };

//* creating dynamic elements
// var text = $(this)
//  .text()
//  .trim();

//  var textInput = $("<textarea>")
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

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

//   var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
//   };

//===============================================
// * EVENT LISTENER

// document.querySelector("#wrapper").addEventListener("click", function(event) {
//     if (event.target.matches(".task")) {
//       console.log("dynamic task was clicked");
//     }
//    });