const axios = require('axios');
const WeatherClient = require('../WeatherClient');
const { TypeError, WeatherError } = require('../errors');
const Util = require('../Util/Util');
const handleRequest = require('../rest/RequestHandler');
const { booleanConverters } = require('../Util/Constants');


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
         * @readonly
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
         * @property {String} timezone The TimeZone Identifier of this location (e.g Europe/London)
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
         * @typedef {Object} APICurrentWeather
         * @property {Number} last_updated_epoch The epoch of this last update of this weather (e.g 1630075500)
         * @property {String} last_updated The last time the weather was updated (e.g 2021-08-27 15:45)
         * @property {Number} temp_c The temperature in degrees Celsius (°C)
         * @property {Number} temp_f The temperature in degrees Fahrenheit (°F)
         * @property {Boolean} isDay Wether it's daytime or not
         * @property {Condition} condition The condition of this weather
         * @property {Number} wind_mph The wind speed in miles-per-hours
         * @property {Number} wind_kph The wind speed in kilometers-per-hours
         * @property {Number} wind_degree The direction of wind in degrees (e.g 340°)
         * @property {String} wind_direction The direction of the wind formatted North, East, Sout, West (e.g NNW = North North West)
         * @property {Number} pressure_mb The pressure in millibar
         * @property {Number} pressure_in The pressure in inches
         * @property {Number} precip_mm The precipitations in millimeters
         * @property {Number} precip_in The precipitations in inches
         * @property {Number} humidity The percentage of humidity (%)
         * @property {Number} cloud The cloud coverage percentage (%)
         * @property {Number} feelslike_c The feelslike temperature in degrees Celsius (°C)
         * @property {Number} feelslike_f The feelslike temperature in degrees Fahrenheit (°F)
         * @property {Number} vis_km The visibility in kilometers (km)
         * @property {Number} vis_miles The visibility in miles
         * @property {Number} uv The UV index
         * @property {Number} gust_mph The gust speed in miles-per-hours
         * @property {Number} gust_kph The gust speed in kilometers-per-hours
         * @property {Aqi} aqi The air-quality-information of the location
         */

        /**
         * A string reprensenting an URL leading to an image
         * @typedef {String} ImageUrl
         */

        /**
         * @typedef {Object} Condition
         * @property {String} text The condition as a text (e.g Sunny, Partialy Cloudy, ect...)
         * @property {ImageUrl} icon The icon url of this condition
         * @property {Number} code The code of this condition
         */

        /**
         * @typedef {Object} Aqi
         * @property {Number} co The quantity of micro-grams of Carbon monoxide for each cubic-cube of air (µg/m3)
         * @property {Number} o3 The quantity of micro-grams of Ozone for each cubic-cube of air (µg/m3)
         * @property {Number} no2 The quantity of micro-grams of Nitrogen dioxide for each cubic-cube of air (µg/m3)
         * @property {Number} so2 The quantity of micro-grams of Sulphur donoxide for each cubic-cube of air (µg/m3)
         * @property {Number} pm2_5 The quantity of micro-grams of PM2.5 particles for each cubic-cube of air (µg/m3)
         * @property {Number} pm10 The quantity of micro-grams of PM10 particles for each cubic-cube of air (µg/m3)
         * @property {Number} us_epa_index US - EPA Standards.
         * * 1 means Good
         * * 2 means Moderate
         * * 3 means Unhealthy for sensitive group
         * * 4 means Unhealthy
         * * 5 means Very Unhealthy
         * * 6 means Hazardous
         * @property {Number} gb_defra_index	
         */

        /**
         * The current weather data
         * @type {APICurrentWeather}
         */
        this.weather = null;

        /**
         * @typedef {Object} APIReponseObject
         * @property {APILocation}
         * @property {APICurrentWeather}
         */

        /**
         * The raw api response object
         * @type {APIReponseObject}
         */
        this._apiResponse = null;

    }

    /**
     * Get the current weather
     * @param {LocationResolvable} location The location to get the weather from.
     * @param {Boolean} aqi Wether to display aqi info or not
     * @returns {APIReponseObject} 
     */
    async get(location, aqi = false) {
        if (typeof location != 'string' && typeof location != 'number') throw new TypeError('INVALID_TYPE', 'location', 'String or a Number');
        if (typeof aqi != 'boolean') throw new TypeError('INVALID_TYPE', 'location', 'String or a Number');

        /**
         * {
         *  path: current.json,
         *  method: 'GET',
         *  key: weatherClient.options.apiKey,
         *  params: ['q=location', 'aqi=aqi', 'lang=weatherClient.options.language']
         * }
         */
        const request = {
            path: 'current.json',
            method: 'GET',
            key: this.client.options.apiKey,
            params: [`q=${location ?? this.client.options.defaultLocation}`, `aqi=${booleanConverters[aqi]}`, `lang=${this.client._language}`]
        }

        const response = await handleRequest(request);

        this.location = response.data.location;
        this.current = response.data.current;

        Object.defineProperty(this.current, 'timezone', { get: function() { return this.current.tz_id}});
        Object.defineProperty(this.current, 'gb_defra_index', { get: function() { return this.current.aqi['gb-defra-index']}});
        Object.defineProperty(this.current, 'us_epa_index', { get: function() { return this.current.aqi['us-epa-index']}});

        this._apiResponse = response.data;

        return this;
        

    }

}

module.exports = CurrentWeather;