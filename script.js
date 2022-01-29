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
  search(textInput.value);
}

function search(city) {
  let apiKey = "cfecd485617989b8f0add91581222571";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showData);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);

function showData(response) {
  event.preventDefault();
  console.log(response.data.main.temp);
  let temperature = response.data.main.temp;
  let temp = document.querySelector("#tempC");
  temp.innerHTML = Math.round(`${temperature}`);
}
