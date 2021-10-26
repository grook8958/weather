const CurrentAPI = require('./api/CurrentAPI');
const ForecastAPI = require('./api/ForecastAPI');
const SearchAPI = require('./api/SearchAPI');
const AstronomyAPI = require('./api/AstronomyAPI');
const SportsAPI = require('./api/SportsAPI');
const HistoryAPI = require('./api/HIstoryAPI');
const TimezoneAPI = require('./api/TimezoneAPI');
const IPAPI = require('./api/IPAPI');

/**
 * A handler to make correct API calls
 * @extends null
 */
class RequestHandler extends null {

    /**
     * The Search API
     * @type {SearchAPI}
     */
    static search = new SearchAPI();

    /**
     * The Forecast API
     * @type {ForecastAPI}
     */
    static forecast = new ForecastAPI();

    /**
     * The Current API
     * @type {CurrentAPI}
     */
    static current = new CurrentAPI();

    /**
     * The Current API
     * @type {AstronomyAPI}
     */
     static astronomy = new AstronomyAPI();

    /**
     * The Current API
     * @type {SportsAPI}
     */
    static sports = new SportsAPI();

    /**
     * The Current API
     * @type {HistoryAPI}
     */
    static history = new HistoryAPI();

     /**
     * The Current API
     * @type {TimezoneAPI}
     */
    static timezone = new TimezoneAPI();

    /**
     * The Current API
     * @type {IPAPI}
     */
    static ip = new IPAPI();


    /**
     * Makes a request to the specified API endpoint.
     * @param {object} request The request object.
     * @return {object} Request response object.
     */
    static async makeRequest(request) {
        const axios = require('axios');
        const Util = require('../Utils/Util');
        const { TypeError, WeatherError, RangeError } = require('../errors');
    
        let baseUrl = 'http://api.weatherapi.com/v1/';

        //Check if path is a string
        Util.verifyString(request.path);

        baseUrl += request.path;

        //Check if request is an Object
        Util.verifyObject(request,'Request Options');

        //Add key to URL
        baseUrl += `?key=${request.key}`;

        //Check if the parameters is an array
        Util.verifyArray(request.params,'Request Params options');

        //Add all params to URL
        for (const param of request.params) {
            if (request.params.length === 0) continue;
            Util.verifyString(param, `Request Parameter #${request.params.indexOf(param)}`);
            baseUrl += `&${param}`;
        }

        //Execute the right request depending on the method

        const methods = ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'];

        const method = request.method.toUpperCase();

        //Check if the method is valid
        if (!methods.includes(method)) throw new TypeError('UNKNOWN_METHOD');

        switch(method) {
            case('GET'):
                const reponse = await axios.get(baseUrl)
                    .catch(error => RequestHandler.handleError(error));
                return reponse;
            default: throw new WeatherError('METHOD_NOT_ALLOWED', method);
        }
    }

    /**
     * Handles the API error and throws a new one accordingly
     * @param {Object} error The error object returned by Axios
     */
    static handleError(error) {
        const WeatherAPIError = require('./WeatherAPIError');
        const { TypeError, WeatherError, RangeError } = require('../errors');
    
        if (error.response.status === 404) throw new WeatherError('UKNOWN_API_ENDPOINT');
        throw new WeatherAPIError(error.response.data, error.response.config);
    }

    /**
     * Creates a request object
     * @param {String} path The API endpoint (ex: forecast.json/.xml)
     * @param {Object} method The HTTP method (ex:GET)
     * @param {Array<String>} parameters The HTTP parameters (ex:q=London) 
     * @param {String} key The API key
     */
    static createRequestObj(path, method, parameters = [], key) {
        return {
            path,
            method,
            params: parameters,
            key
        };
    }


}

module.exports = RequestHandler;