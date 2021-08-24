
const { APILanguages } = require('./Util/Constants');

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
     * The API key to access the weather API @see{@link https://weatherapi.com/pricing.aspx}
     * @typedef {String} apiKey
     */
    constructor(apiKey, language) {
        /**
         * The key to access the weather API @see {@link https://weatherapi.}
         * @type {?apiKey}
         */
        this.apiKey = apiKey;

        /**
         * The language to be used by the API
         * @type {?APILanguage}
         */
        this.APILanguage = WeatherClient.resolveLanguage(language) ?? null;
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

    /**
     * Verifies if the provided API Key is valid
     * @param {apiKey} apiKey
     * @returns {?boolean}
     * @private
     */
    static verifyAPIKey(apiKey) {
        
    }
}

//Export the WeatherClient
module.exports = WeatherClient;