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

export function displayWeather(weather) {

    const weatherContainer =
        document.getElementById("weather-container");

    weatherContainer.innerHTML = "";

    const card =
        document.createElement("div");

    card.classList.add("weather-card");

    card.innerHTML = `

        <h2>${weather.city}</h2>

        <h1>${weather.temperature}°C</h1>

        <p><strong>${weather.condition}</strong></p>

        <p>Feels Like: ${weather.feelsLike}°C</p>

        <p>Humidity: ${weather.humidity}%</p>

        <p>Wind: ${weather.wind} km/h</p>

    `;

    weatherContainer.appendChild(card);

}