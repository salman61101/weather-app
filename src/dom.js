import {
    fetchWeather,
    toggleUnit,
    getCurrentUnit
} from "./api";

import {
    displayWeather,
    showLoading
} from "./ui";

let lastCity = "";

export function setupSearch() {

    const form = document.getElementById("search-form");
    const input = document.getElementById("location-input");
    const toggleButton = document.getElementById("unit-toggle");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const city = input.value.trim();

        if (!city) return;

        lastCity = city;

        showLoading();

        try {

            const weather = await fetchWeather(city);

            displayWeather(weather, getCurrentUnit());

        } catch {

            document.getElementById("weather-container").innerHTML = `

                <div class="weather-card">

                    <h2>City Not Found</h2>

                    <p>Please search for a valid city.</p>

                </div>

            `;

        }

    });

    toggleButton.addEventListener("click", async () => {

        if (!lastCity) return;

        toggleUnit();

        toggleButton.textContent =
            getCurrentUnit() === "metric"
                ? "°C"
                : "°F";

        showLoading();

        try {

            const weather = await fetchWeather(lastCity);

            displayWeather(weather, getCurrentUnit());

        } catch {

            document.getElementById("weather-container").innerHTML = `

        <div class="weather-card">

            <h2>❌ City Not Found</h2>

            <p>

                Please check the spelling and try again.

            </p>

        </div>

    `;

        }

    });

}