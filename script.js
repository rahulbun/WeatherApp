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
  try {
    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    if (data.cod && data.cod == 404) {
      alert("City Not found");
      return;
    }

    let unixTimestamp = data.dt;

    // Create a new Date object and multiply the timestamp by 1000
    let date = new Date(unixTimestamp * 1000);

    // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    let dayOfWeek = date.getDay();

    // Create an array of days to map the day of the week
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Format the date as a string
    let formattedDate = date.toLocaleDateString();
    let dateComponents = formattedDate.split("/");

    // Get the weekday name based on the day of the week
    let weekday = daysOfWeek[dayOfWeek];

    const allmonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = allmonths[dateComponents[0] - 1];



    let timestampOffset = data.timezone;
    const timestamp = Math.floor(Date.now() / 1000) + timestampOffset;
    const da = new Date(timestamp * 1000);

    const localTime = da.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    });

    console.log(localTime);



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
    document.querySelector(
      ".weather__wind"
    ).innerHTML = `${data.wind.speed}m/s`;
    document.querySelector(".weather__humidity").innerHTML = `${parseInt(
      data.main.humidity
    )}%`;
    document.querySelector(
      ".weather__date"
    ).innerHTML = `${weekday},   ${dateComponents[1]} ${month},${dateComponents[2]}`;
    document.querySelector(
      ".weather__time"
    ).innerHTML=localTime;
    // any error except invalid name
  } catch (error) {
    alert("An error occurred. Please try again later.");
  }
}

// Event listener for search button click
searchBtn.addEventListener("click", () => {
  // Trigger weather check for the entered city
  checkWeather(searchForm.value);
  // Clear the search input field
  searchForm.value = "";
});

// Event listener for enter
searchForm.addEventListener("keyup", (e) => {
  // console.log(e.key)
  if (e.key === "Enter") {
    checkWeather(searchForm.value);
  }
});
