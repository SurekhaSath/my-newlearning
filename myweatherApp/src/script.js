function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchInputElement = searchInputElement.value;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement;
  let weatherApi = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement}&key=b437574c1146da7t8a94bof1824f6cc0&units=metric`;
  axios.get(weatherApi).then(display);
}
function display(response) {
  console.log(response);
  let currentCondition = document.getElementById("current-condition");
  let currentHumidity = document.getElementById("humidity");
  let currentWindspeed = document.getElementById("wind-speed");
  let currentweatheremoji = document.querySelector("img");
  let currentValue = document.getElementById("temperature-Value");

  currentCondition.innerHTML = response.data.condition.description;
  currentHumidity.innerHTML = response.data.temperature.humidity;
  currentWindspeed.innerHTML = response.data.wind.speed;
  currentweatheremoji.src = response.data.condition.icon_url;
  currentValue.innerHTML = Math.round(response.data.temperature.current);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
