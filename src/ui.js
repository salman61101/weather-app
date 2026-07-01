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

    weatherContainer.innerHTML = "";

    const card = document.createElement("div");

    card.classList.add("weather-card");

    card.innerHTML = `
        <h2>${weather.city}</h2>

        <h3>${weather.temperature}°C</h3>

        <p>${weather.condition}</p>
    `;

    weatherContainer.appendChild(card);

}