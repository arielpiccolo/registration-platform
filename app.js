// grabing elements from the DOM
const form = document.createElement("form");
const username = document.createElement("username");
const email = document.createElement("email");
const password = document.createElement("password");
const password2 = document.createElement("password2");

// create an event listener to submit when click
form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(username.value);
});
