const { EventEmitter } = require('events');
const { Languages, Language, APILanguageCode, LocationResolvable, APILanguageCodes, APILocation } = require('../Utils/Constants');
const { TypeError, RangeError, WeatherError } = require('../errors');
const RequestHandler = require('../rest/RequestHandler')

/**
 * Represents the base of the WeatherClient
 * @extends EventEmitter
 * @type {BaseWeatherClient}
 */
class BaseWeatherClient extends EventEmitter {
    

    /**
     * @typedef BaseWeatherClient
     * @property {BaseWeatherClientOptions} options The options of this client
     * @property {RequestHandler} api The API handler to make requests easily
     */

    /**
     * @typedef {Object} BaseWeatherClientOptions
     * @property {apiKey} apiKey The API key
     * @property {Language} APILanguage The Language to be used by the API.
     * @property {LocationResolvable} defaultLocation The default location from wich to get the weather @requires
     */



    /**
     * The API key to access the weather API
     * @see {@link https://weatherapi.com/pricing.aspx}
     * @typedef {String} apiKey
     */

    /**
     * The BaseClient constructor.
     * @param {BaseWeatherClientOptions} options 
     */
    constructor(options) {
        super();

        /**
         * The options of this WeatherClient
         * @type {?BaseWeatherClientOptions}
         */
         this.options = options ?? null;

         /**
          * The API to easily make requests to the weather API
          * @type {RequestHandler}
          */
         this.api = RequestHandler
        
    }
    
    /**
     * Destroy the current clietn instance.
     * @returns {null}
     */
    destroy() {return this = null;}

    /**
     * Destroys the API key of this client
     * @returns {void}
     */
    destroyAPIKey() {this.options.apiKey = null;this.apiKey = null;}

    /**
     * Change an option for this client
     * @param {String} option The option to change
     * @param {String|Number} value The value of the option to change
     * @returns {BaseWeatherClientOptions} The new client options
     */
    changeOption(option, value) {this.options[option] = value}
    
    
}

module.exports = BaseWeatherClient;
