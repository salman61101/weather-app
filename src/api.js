import { processWeatherData } from "./weather";

export async function fetchWeather(city) {

    console.log(`Searching for ${city}...`);

    const fakeData = {

        city,

        temperature: 30,

        condition: "Sunny"

    };

    return processWeatherData(fakeData);

}