/* Student Name: Rahul Dev Banjara
   Student I.D: 2407061*/

// API key for OpenWeatherMap
const apiKey = "145c5f5cc7b6719079c76a215871e298";
// API URL for fetching weather data
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Event listener for DOMContentLoaded to trigger weather check for the default city
document.addEventListener("DOMContentLoaded", () => {
  // Set default city
  const defaultCity = "Etawah";

  // Trigger weather check for the default city
  checkWeather(defaultCity);
});

// Function to convert country code to country name
function convertCountryCode(country) {
  // Initialize Internationalization API for region names
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  // Return the country name for the given country code
  return regionNames.of(country);
}

// DOM elements
const searchForm = document.querySelector(".weather__searchform");
const searchBtn = document.querySelector(".fa-magnifying-glass");
const weather__icon = document.querySelector(".weather__icon");

// Function to check weather for a given city
async function checkWeather(city) {
  // Fetch weather data from OpenWeatherMap API
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  // Log the received icon code to the console
  console.log("Icon Code:", data.weather[0].icon);
  // Log the entire weather data to the console
  console.log(data);

  // Set weather icon based on the received icon code
  if (data.weather[0].icon == "01d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/01d.png" />`;
  } else if (data.weather[0].icon == "01n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/01n.png" />`;
  } else if (data.weather[0].icon == "02d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/02d.png" />`;
  } else if (data.weather[0].icon == "02n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/02n.png" />`;
  } else if (data.weather[0].icon == "03d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/03d.png" />`;
  } else if (data.weather[0].icon == "03n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/03n.png" />`;
  } else if (data.weather[0].icon == "04d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/04d.png" />`;
  } else if (data.weather[0].icon == "04n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/04n.png" />`;
  } else if (data.weather[0].icon == "09d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/09d.png" />`;
  } else if (data.weather[0].icon == "09n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/09n.png" />`;
  } else if (data.weather[0].icon == "10d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/10d.png" />`;
  } else if (data.weather[0].icon == "10n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/10n.png" />`;
  } else if (data.weather[0].icon == "11d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/11d.png" />`;
  } else if (data.weather[0].icon == "11n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/11n.png" />`;
  } else if (data.weather[0].icon == "13d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/13d.png" />`;
  } else if (data.weather[0].icon == "13n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/13n.png" />`;
  } else if (data.weather[0].icon == "50d") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/50d.png" />`;
  } else if (data.weather[0].icon == "50n") {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/50n.png" />`;
  } else {
    weather__icon.innerHTML = `   <img src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/unknown.png" />`;
  }

  // Update weather information on the webpage
  document.querySelector(".weather__city").innerHTML = data.name;
  document.querySelector(".country").innerHTML = convertCountryCode(
    data.sys.country
  );
  document.querySelector(".weather__temperature").innerHTML = `${Math.round(
    data.main.temp
  )}°`;
  document.querySelector(".weather__forecast").innerHTML =
    data.weather[0].description;
  document.querySelector(".weather__realfeel").innerHTML = `${Math.round(
    data.main.feels_like
  )}°`;
  document.querySelector(".weather__pressure").innerHTML = `${parseInt(
    data.main.pressure
  )}mb`;
  document.querySelector(".weather__wind").innerHTML = `${data.wind.speed}m/s`;
  document.querySelector(".weather__humidity").innerHTML = `${parseInt(
    data.main.humidity
  )}%`;
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
  // Trigger weather check for the entered city
  checkWeather(searchForm.value);
  // Clear the search input field
  searchForm.value = "";
});