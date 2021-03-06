'use strict';

const axios = require('axios');
const { APIErrors } = require('./Constants');
const { Error, TypeError, RangeError } = require('../errors');
const WeatherAPIError = require('../rest/WeatherAPIError');


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

    /**
     * @param {*} key The key to verify
     * @param {String} name The name of the key
     * @returns {void|TypeError}
     */
    static verifyString(key, name) {
        if (typeof key != 'string') {
            throw new TypeError('INVALID_TYPE', name, 'String');
        }
    }

    /**
     * @param {*} key The key to verify
     * @param {String} name The name of the key
     * @returns {void|TypeError}
     */
    static verifyNumber(key, name) {
        if (typeof key != 'number') {
            throw new TypeError('INVALID_TYPE', name, 'Number');
        }
    }

    /**
     * @param {*} key The key to verify
     * @param {String} name The name of the key
     * @returns {void|TypeError}
     */
    static verifyObject(key, name) {
        if (typeof key != 'object') {
            throw new TypeError('INVALID_TYPE', name, 'Object');
        }
    }

    /**
     * @param {*} key The key to verify
     * @param {String} name The name of the key
     * @returns {void|TypeError}
     */
    static verifyArray(key, name) {
        if (!Array.isArray(key)) {
            throw new TypeError('INVALID_TYPE', name, 'Array');
        }
    }

    /**
     * 
     * @param {Object} object 
     * @param {*} value 
     * @returns {*|boolean} Returns the property of the value, or false if it doesn't exist
     */
    static getPropertyOfValue(object, value) {
        Util.verifyObject(object, 'Object to get property from');
        const arrayOfProperties = Object.keys(object);
        for (const property of arrayOfProperties) {
            if (object[property] === value) {
                return property;
            }
        }
        return false;
    }

}

module.exports = Util;