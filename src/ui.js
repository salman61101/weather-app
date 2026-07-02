const weatherContainer =
    document.getElementById("weather-container");

export function displayWelcome() {

    weatherContainer.innerHTML = "";

    const card = document.createElement("div");

    card.classList.add("weather-card");

    card.innerHTML = `

        <h2>Welcome!</h2>

        <p>Search for any city to view its weather.</p>

    `;

    weatherContainer.appendChild(card);

}

export function showLoading() {

    weatherContainer.innerHTML = `

        <div class="loading">

            Loading...

        </div>

    `;

}

export function displayWeather(weather, unit) {

    weatherContainer.innerHTML = "";

    const card = document.createElement("div");

    card.classList.add("weather-card");

    const temperatureUnit =
        unit === "metric"
            ? "°C"
            : "°F";

    const windUnit =
        unit === "metric"
            ? "km/h"
            : "mph";

    card.innerHTML = `
    <h2>${weather.city}</h2>

    <p>${weather.date}</p>

    <h1>${weather.temperature}${temperatureUnit}</h1>

    <h3>${weather.condition}</h3>

    <img
        src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${weather.icon}.png"
        alt="${weather.condition}"
        width="120"
    >

    <p>Feels Like: ${weather.feelsLike}${temperatureUnit}</p>

    <p>Humidity: ${weather.humidity}%</p>

    <p>Wind: ${weather.wind} ${windUnit}</p>
`;

    weatherContainer.appendChild(card);

    document.body.className = "";

    const condition =
        weather.condition.toLowerCase();

    if (condition.includes("sun")) {

        document.body.classList.add("sunny");

    }

    else if (condition.includes("cloud")) {

        document.body.classList.add("cloudy");

    }

    else if (condition.includes("rain")) {

        document.body.classList.add("rainy");

    }

    else {

        document.body.classList.add("default-weather");

    }

}