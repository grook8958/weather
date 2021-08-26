'use strict';

/**
 * Represents an error from the Discord API.
 * @extends Error
 */
class WeatherAPIError extends Error {

    constructor(error, requestOptions = {}, message) {
        super(message);
        this.name = 'WeatherAPIError';

        /**
         * The message of this error
         * @type {string}
         */
        this.message = error.error.message;

        /**
         * The code of this error
         * @type {number}
         */
        this.code = error.error.code;

        /**
         * The data of this request
         * @type {Object}
         */
        this.requestData = {
            url: requestOptions.url,
            method: requestOptions.method.toUpperCase(),
            headers: requestOptions.headers
        };
    }
}

module.exports = WeatherAPIError;

