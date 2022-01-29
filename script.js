let apiUrl = `https://api.openweathermap.org/data/2.5/weather?=${city}&appid=${apiKey}&units=metric`;
let apiKey = "cfecd485617989b8f0add91581222571";
let textInput = document.querySelector("#cityInput");
let city = `${textInput.value}`;
let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let hour = [currentTime.getHours()];
let minute = [currentTime.getMinutes()];
if (hour < 10) {
  hour = `0${hour}`;
}
if (minute < 10) {
  minute = `0${minute}`;
}

let time = document.querySelector("#timeNow");
time.innerHTML = day + " " + hour + ":" + minute;

function citySearch(event) {
  event.preventDefault();
  let textInput = document.querySelector("#cityInput");
  let city = document.querySelector("#cityNow");
  city.innerHTML = `${textInput.value}`;
}
let textInput = document.querySelector("#cityInput");
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", citySearch);

function showData(response) {
  console.log(response.data.main.temp);
  let apiKey = "cfecd485617989b8f0add91581222571";
  let textInput = document.querySelector("#cityInput");
  let city = `${textInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?=${city}&appid=${apiKey}&units=metric`;
  let temp = document.querySelector("#tempC");
}

axios.get(`${apiUrl}`).then(showData);
console.log(apiUrl);
