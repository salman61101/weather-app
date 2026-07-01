import { processWeatherData } from "./weather";

const API_KEY = "H8NAUP5LSN9V4EZ5V49THT8LZ";

export async function fetchWeather(city) {

    const url =
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("City not found");

        }

        const data = await response.json();

        return processWeatherData(data);

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}