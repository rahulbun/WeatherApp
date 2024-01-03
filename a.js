async function checkWeather(city) {
    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
    if (!response.ok) {
      // Handle error when response is not ok
      console.error('Error:', response.status, response.statusText);
      // You can display an error message on your webpage or handle it in any other way
      return;
    }
  
    try {
      // Try to parse JSON data
      const data = await response.json();
      console.log(data);
  
    /// Convert Unix timestamp to date components
    let unixTimestamp = data.dt;
  
    // Create a new Date object and multiply the timestamp by 1000
    let date = new Date(unixTimestamp * 1000);
  
    // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    let dayOfWeek = date.getDay();
  
    // Create an array of days to map the day of the week
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Format the date as a string
    let formattedDate = date.toLocaleDateString();
    let dateComponents = formattedDate.split('/');
  
    // Get the weekday name based on the day of the week
    let weekday = daysOfWeek[dayOfWeek];
  
    // Define an array of month names
    const allmonths = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    // Get the month name based on the month component
    let month = allmonths[dateComponents[0] - 1];
  
  
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
    document.querySelector(".weather__datetime").innerHTML = `${weekday},   ${dateComponents[1]} ${month},${dateComponents[2]}`;
  
    }
    catch (error) {
      // Handle JSON parsing error
      alert('Error parsing JSON:', error.message);
      // You can display an error message on your webpage or handle it in any other way
    }
  }
  