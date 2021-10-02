'use strict';

const { Languages, Language, APILanguageCode, LocationResolvable, APILanguageCodes, APILocation, BaseWeatherClientOptions } = require('../Util/Constants');
const CurrentWeather = require('../structures/CurrentWeather');
const Util = require('../Util/Util');
const { TypeError, RangeError, WeatherError } = require('../errors');
const RequestHandler = require('../rest/RequestHandler');
const BaseWeatherClient = require('./BaseWeatherClient');


/**
 * Represents a WeatherAPI Client
 * @extends BaseWeatherClient
 */
class WeatherClient extends BaseWeatherClient {
    /**
     * @name WeatherClient
     * @kind ClientConstructor
     * @memberof BaseWeatherClient
     */

    /**
     * @typedef WeatherClient
     * @property {WeatherClientOptions} options The options of this client
     */

    /**
     * The API key to access the weather API
     * @see {@link https://weatherapi.com/pricing.aspx}
     * @typedef {String} apiKey
     */

    /**
     * @typedef {Object} WeatherClientOptions
     * @extends {BaseWeatherClientOptions}
     * @property {apiKey} apiKey The API key
     * @property {Language} APILanguage The Language to be used by the API.
     * @property {LocationResolvable} defaultLocation The default location from wich to get the weather @requires
     */

    /**
     * Client constructor used to intantiate a new client, there should only be one intance of this client.
     * @param {?WeatherClientOptions} options The options for this client
     */
    constructor(options = {}) {
        super(options, api);

        /**
         * The options of this WeatherClient
         * @type {?WeatherClientOptions}
         */
        this.options = options;

        /**
         * The key to access the weather API
         * @see {@link https://weatherapi.com/pricing.aspx}
         * @type {?apiKey}
         */
        this.apiKey = options?.apiKey ?? null;

        /**
         * The language to be used by the API
         * @type {?Language}
         */
        this.language = options.language ?? null;

        /**
         * The language code for the API
         * @type {APILanguageCode}
         * @private
         */
        this._language = Util.getPropertyOfValue(APILanguageCodes, this.language) ? Util.getPropertyOfValue(APILanguageCodes, this.language) : null;

        /**
         * The default location to be used by the API to get weather data
         * @type {?Location}
         */
        this.defaultLocation = options?.location ?? null;

        /**
         * The last current weather data
         * @type {CurrentWeather}
         */
        this.current = null

        WeatherClient.init(this);
        
    }

    /**
     * 
     * @param {WeatherClient} client 
     * @returns
     * @private 
     */
     static async init(client) {
        if (!client.apiKey || !client.options.apiKey) throw new WeatherError('API_KEY_MISSING');
        if (typeof client.apiKey != 'string') throw new TypeError('INVALID_TYPE', 'API key', 'String')
        Util.validateApiKey(client.apiKey);
        client.current = await new CurrentWeather(client).get(client.options.defaultLocation);
        client.emit('ready');
        
        
    }

    /**
     * Set the language to be used by the API
     * @param {LanguageResolvable} language The language to be used by the API
     * @returns {WeatherClient}
     */
    setLanguage(language) {
        if (typeof location != String) throw new TypeError('INVALID_TYPE', 'language', 'String or an LanguageResolvable');
        this.language = WeatherClient.resolveLanguage(language);
        return this;
    }

    /**
     * Set the default location from wich to get the weather
     * @param {LocationResolvable} location 
     * @returns {WeatherClient}
     */
    setDefaultLocation(location) {
        return this.defaultLocation = WeatherClient.resolveLocation(location);
    }

    /**
     * Data that can be resolved to an APILanguage. This can be
     * * APILanguage
     * * string
     * @typedef {string|APILanguage} LanguageResolvable
     */  

    /**
     * Resolve the language option
     * @param {LanguageResolvable} language 
     * @returns {APILanguageCode}
     * @private
     */
    static resolveLanguage(language) {
        const split = language.split('');
        if (split.length > 6 && split[0] != 'z' && split[1] != 'h') {
            const lng = Languages[language];
            return APILanguageCode[lng];
        } else {
            return language;
        }
    }

    /**
     * Resolve the language option
     * @param {string|number|LocationResolvable} language 
     * @returns {APILocation}
     * @private
     */
    static async resolveLocation(location) {
        if (typeof location === 'string') {
            const req = {
                path: 'search.json',
                method: 'GET',
                key: this.apiKey,
                params: []
            }
            const res = await RequestHandler.makeRequest(req);
            return res.data[0];
        }
    }
    
}

//Export the WeatherClient
module.exports = WeatherClient;