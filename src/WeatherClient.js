'use strict';

const { APILanguage } = require('./Util/Constants');
const CurrentWeather = require('./requests/CurrentWeather');
const Util = require('./Util/Util');
const { TypeError, RangeError, WeatherError } = require('./errors');

/**
 * Represents a WeatherAPI Client
 */
class WeatherClient {
    /**
     * @name WeatherClient
     * @kind ClientConstructor
     * @memberof WeatherClient
     */

    /**
     * @typedef WeatherClient
     * @property {WeatherClientOptions} options The options of this client
     */

    /**
     * The API key to access the weather API @see{@link https://weatherapi.com/pricing.aspx}
     * @typedef {String} apiKey
     */

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
     * @typedef {Object} WeatherClient
     * @property {WeatherClientOptions} options The options of this client
     */

    /**
     * @typedef {Object} WeatherClientOptions
     * @property {apiKey} apiKey The API key
     * @property {APILanguage} APILanguage The Language to be used by the API.
     * @property {LocationResolvable} defaultLocation The default location from wich to get the weather @requires
     */

    /**
     * Client constructor used to intantiate a new client, there should only be one intance of this client.
     * @param {WeatherClientOptions} options The options for this client
     */
    constructor(options = {}) {
        /**
         * The options of this WeatherClient
         * @type {?WeatherClientOptions}
         */
        this.options = options

        /**
         * The key to access the weather API @see {@link https://weatherapi.}
         * @type {?apiKey}
         */
        this.apiKey = options?.apiKey ?? null;

        /**
         * The language to be used by the API
         * @type {?APILanguage}
         */
        this.APILanguage = options?.language ? WeatherClient.resolveLanguage(options.language) : null;

        /**
         * The default location to be used by the API to get weather data
         * @type {?Location}
         */
        this.defaultLocation = options?.location ?? null;

        /**
         * The CurrentsWeather
         * @type {CurrentWeather}
         */
        this._CurrentWeather = new CurrentWeather(this).get(options.defaultLocation);

        if (!this.apiKey) throw new WeatherError('API_KEY_MISSING');
        if (typeof this.apiKey != 'string') throw new TypeError('INVALID_TYPE', 'API key', 'String')
        Util.validateApiKey(this.apiKey);

    }

    //WeatherClient.current.weather
    get current() { return this._CurrentWeather }

    /**
     * Set the language to be used by the API
     * @param {APILanguageResolvable} language The language to be used by the API
     * @returns {WeatherClient}
     */
    setLanguage(language) {
        if (typeof location != String) throw new TypeError('INVALID_TYPE', 'language', 'String or an APILanguageResolvable');
        this.APILanguage = WeatherClient.resolveLanguage(language);
        return this;
    }

    /**
     * Set the default location from wich to get the weather
     * @param {LocationResolvable} location 
     * @returns {WeatherClient}
     */
    setDefaultLocation(location) {
        if (typeof location != String || typeof location != Number) throw new TypeError('INVALID_TYPE', 'location', 'String or a Number');
        this.defaultLocation = location
    }

    /**
     * Data that can be resolved to an APILanguage. This can be
     * * APILanguage
     * * string
     * @typedef {string|APILanguage} APILanguageResolvable
     */

    /**
     * Resolve the language option
     * @param {APILanguageResolvable} language 
     * @returns {APILanguage}
     * @private
     */
    static resolveLanguage(language) {
        const split = language.split('');
        if (split.length > 6 && split[0] != 'z' && split[1] != 'h') {
            return APILanguages[language];
        } else {
            return language;
        }
    }
    
}

//Export the WeatherClient
module.exports = WeatherClient;