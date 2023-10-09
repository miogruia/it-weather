const API_KEY ="bc67bc493db34ab350dda5d8eba8af25";
// const API_KEY = "ea3e3338d6a2f4fe6d246649169f3479";


function getCurrentWeatherEndpoint(city) {
  console.log("My City:", city);
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}