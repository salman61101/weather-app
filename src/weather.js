export function processWeatherData(data) {

    return {

        city: data.city,

        temperature: data.temperature,

        condition: data.condition

    };

}