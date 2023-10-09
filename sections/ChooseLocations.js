const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  console.log("update București")
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  console.log("update T")
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  console.log("update O")

  updateWeather("Oradea");
});
arad.addEventListener("click", function () {
  console.log("update A")

  updateWeather("Arad");
});
sibiu.addEventListener("click", function () {
  console.log("update S")

  updateWeather("Sibiu");
});


