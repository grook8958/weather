const WeatherClient = require('../client/WeatherClient');
const { TypeError } = require('../errors');
const RequestHandler = require('../rest/RequestHandler');
const { booleanConverters } = require('../Utils/Constants');
const Location = require('./Location');
const Aqi = require('./Aqi');


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
     * @param {WeatherClient} weatherClient The WeatherClient
     * @param {Object} data The data 
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
         * The location retuned by the API
         * @type {Location}
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
         * The current weather data
         * @type {APICurrentWeather}
         */
        this.weather = null;

        /**
         * The current Air-Quality-Information
         * @type {Aqi}
         */
        this.aqi = null;
    }

    /**
     * Get the current weather
     * @param {LocationResolvable} location The location to get the weather from.
     * @param {Boolean} aqi Wether to display aqi info or not
     * @returns {CurrentWeather} 
     */
    async get(location, aqi = false) {
        if (typeof location != 'string' && typeof location != 'number') throw new TypeError('INVALID_TYPE', 'location', 'String or a Number');
        if (typeof aqi != 'boolean') throw new TypeError('INVALID_TYPE', 'aqi', 'Boolean');

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
        
        const response = await RequestHandler.makeRequest(request);

        this.location = new Location(response.data.location);
        
        this.weather = response.data.current;

        this.weather.condition.icon = `https:${this.weather.condition.icon}`;

        if (this.weather.air_quality) {
            this.aqi = new Aqi(this.weather.air_quality);
            delete this.weather.air_quality;
        }
        return this;
    }

}

module.exports = CurrentWeather;