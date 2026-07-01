export function processWeatherData(data) {

    return {

        city: data.resolvedAddress,

        temperature: data.currentConditions.temp,

        condition: data.currentConditions.conditions,

        humidity: data.currentConditions.humidity,

        wind: data.currentConditions.windspeed,

        feelsLike: data.currentConditions.feelslike,

        icon: data.currentConditions.icon

    };

}