const WeatherClient = require('../WeatherClient');
const axios = require('axios');

/**
 * Represents the response from the API of the current weather
 */
class CurrentWeather extends WeatherClient {

    /**
     * A location string that can be resolved into a location, can be
     * * a city name
     * * Latitude and Longitude
     * * US Zip code
     * * UK Postcode
     * * Cananda postal code
     * * metar:<metar code>
     * * iata:<3 digit airport code>
     * * auto:ip IP lookup
     * * IP address (IPv4 and IPv6 supported)
     * @see{@link http://https://www.weatherapi.com/docs/#intro-request}
     * @typedef {String|number} LocationResolvable
     */

    constructor(apiKey, language, location, aqi = boolean) {
        super(apiKey, language, location);

        /**
         * The location of wich to get the current weather
         * @type {LocationResolvable}
         */
        this.location = location ?? null;

        /**
         * Wether it should display Air-Quality-Informations
         * @type {?boolean}
         * @default false
         */
        this.displayAqi = aqi ?? false;


    }

}

module.exports = CurrentWeather;