import { fetchWeather } from "./api";
import { displayWeather } from "./ui";

export function setupSearch() {

    const form =
        document.getElementById("search-form");

    const input =
        document.getElementById("location-input");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const city = input.value.trim();

        if (!city) return;

        try {

            const weather =
                await fetchWeather(city);

            displayWeather(weather);

        }

        catch {

            alert("City not found.");

        }

    });

}