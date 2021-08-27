const axios = require('axios');
const WeatherClient = require('../WeatherClient');

/**
 * Represents the response from the API of the current weather
 */
class CurrentWeather {

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


    /**
     * 
     * @param {WeatherClient} weatherClient The WeatherClient
     * @param {Boolean} aqi Wether it should disply Air-Quality-Information
     */
    constructor(weatherClient) {

        /**
         * Wether it should display Air-Quality-Informations
         * @type {?boolean}
         * @default false
         */
        this.displayAqi = false;

        /**
         * The client that instantiated this
         * @type {WeatherClient}
         */
        this.client = weatherClient;

        /**
         * The API Reponse location
         * @typedef {Object} APILocation
         * @property {String} name The name of this city
         * @property {String} region The region in which the city is
         * @property {String} country The country of this city
         * @property {Number} latitude The latitude of the location
         * @property {Number} longitude The longitude of the location
         * @property {String} tz_id The TimeZone Identifier of this location (e.g Europe/London)
         * @property {Number} local_time_epoch The local time epoc (e.g 1630076214)
         * @property {Number} local_time The local_time of the location (e.g 2021-08-27 15:56)
         */

        /**
         * The location retuned by the API
         * @type {APILocation}
         */
        this.location = null
        
        /**
         * The current weather
         * @typedef {Object} CurrentWeather
         * @property {Number} last_updated_epoch The epoch of this last update of this weather (e.g 1630075500)
         * @property {String} last_updated The last time the weather was updated (e.g 2021-08-27 15:45)
         * @property {Number} temp_c The temperature in degrees Celsius (°C)
         * @property {Number} temp_f The temperature in degrees Fahrenheit (°F)
         * @property {Boolean} isDay Wether it's daytime or not
         */

    }

}

module.exports = CurrentWeather;