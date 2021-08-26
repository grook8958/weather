'use strict';

const { APILanguages } = require('./Util/Constants');
//const CurrentWeather = require('./requests/CurrentWeather');
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
     * @property {apiKey} apiKey The key that instantiate this
     */

    /**
     * Used to verify if an API key is valid
     * @param {apiKey} key The API key needed to be verified
     * @return {boolean} True if the key is valid.
     */
    

    /**
     * The API key to access the weather API @see{@link https://weatherapi.com/pricing.aspx}
     * @typedef {String} apiKey
     */

    /**
     * @typedef {Object} WeatherClientOptions
     * @property {apiKey} apiKey The API key
     * @property {APILanguage} APILanguage The Language to be used by the API.
     */

    /**
     * The Client Constructor
     * @param {apiKey} apiKey The API key to access the weather API @see{@link https://weatherapi.com/pricing.aspx}
     * @param {import('./Util/Constants').APILanguage|APILanguageResolvable} language The language to be used by the API
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
        this.apiKey = options.apiKey ?? null;

        /**
         * The language to be used by the API
         * @type {?APILanguage}
         */
        this.APILanguage = options.language ? WeatherClient.resolveLanguage(options.language) : null;

        /**
         * The CurrentsWeather
         * @type {CurrentWeather}
         */
        this._CurrentWeather = null

        if (!this.apiKey || typeof this.apiKey != 'string') {
            throw new WeatherError('API_KEY_MISSING');
        }
        Util.verifyApiKey(this.apiKey);

    }

    /**
     * Set the language to be used by the API
     * @param {APILanguageResolvable} language The language to be used by the API
     * @returns {WeatherClient}
     */
    setLanguage(language) {
        this.APILanguage = WeatherClient.resolveLanguage(language);
        return this;
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