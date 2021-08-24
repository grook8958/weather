const WeatherClient = require('../WeatherClient');
const axios = require('axios');

/**
 * Represents the response from the API of the current weather
 */
class CurrentWeather extends WeatherClient {
    constructor(apiKey, language, location) {
        super(apiKey, language);


        this.location = location ?? null;

    }
}