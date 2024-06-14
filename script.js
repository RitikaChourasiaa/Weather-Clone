const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.getElementById("weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weatherBody");



async function checkWeather(city){
    const apiKey = "ac63021daf1abcea90de0f5bd213f54d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());

    
    if (weatherData.cod ==="404") {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
    } else {
        locationNotFound.style.display = "none";
        weatherBody.style.display = "flex";
    }

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    wind.innerHTML = `${weatherData.wind.speed}Km/H`;

    if (weatherData.weather[0].main === 'Clouds') {
        weatherImg.src = "/image/cloud.png";
    } else if (weatherData.weather[0].main === 'Clear') {
        weatherImg.src = "/image/clear.png";
    } else if (weatherData.weather[0].main === 'Rain') {
        weatherImg.src = "/image/rain.png";
    } else if (weatherData.weather[0].main === 'Mist') {
        weatherImg.src = "/image/mist.png";
    } else if (weatherData.weather[0].main === 'Snow') {
        weatherImg.src = "/image/snow.png";
    }
    
};

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
})

