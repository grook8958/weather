'use strict';

const axios = require('axios');
const { APIErrors } = require('./Constants');
const { Error, TypeError, RangeError } = require('../errors');
const WeatherAPIError = require('../errors/api/WeatherAPIError')


/**
 * Has a lot of utilities
 */
class Util extends null {
    
    /**
     * Checks if an API key is valid
     * @param {String} apiKey The API key to verify
     * @returns {Boolean} Returns true if the API key is valid
     */
    static async validateApiKey(apiKey) {
        await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`)
            .catch((error) => {
                throw new WeatherAPIError(error.response.data, error.response.config);
            });
        return true;
    }
}

module.exports = Util;