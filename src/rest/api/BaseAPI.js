const apiTypes = require('./api-types.json');
const RequestHandler = require('../RequestHandler');

class BaseAPI {
    constructor() {
        this.baseURL = 'http://api.weatherapi.com/v1/';
        this.apiTypes = apiTypes;
        this.endpoint = null;
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }

    /**
     * Make a call to the API.
     * @param {object} params
     * @param {string} format
     * @param {string} endpoint
     * @returns {Promise<Object>}  
     */
    async get(params = {}, format = '', endpoint = '') {
        const axios = require('axios');
        const Util = require('../../Utils/Util');
        const { TypeError, WeatherError, RangeError } = require('../../errors');
        const endpoint1 = this.endpoint ?? endpoint

        //Check if values are the correct types
        Util.verifyString(endpoint1, 'Endpoint must be a string');
        const endpoints = ['search', 'forecast', 'current'];
        if (!endpoints.includes(endpoint1)) {throw new RangeError('UKNOWN_API_ENDPOINT');}
        const formats = ['json', 'xml'];
        if (!formats.includes(format.toLowerCase())) {throw new TypeError('INVALID_FORMAT')}

        this.baseURL += `${endpoint1}.${format.toLowerCase()}`

        let i = 0;
        for (const property in this.params) {
            if (property === 'key') {
              if (this.params[property] !== typeof params[property]) {
                    throw new TypeError('INVALID_TYPE', property, this.params[property])
              }
              this.baseURL += `?${property}=${params[property]}`
              
            } else {
                if (this.params[property] !== typeof params[property]) {
                    throw new TypeError('INVALID_TYPE', property, this.params[property])
                }
                this.baseURL += `&${property}=${params[property]}`
            }
            i++;
        }


        //baseURL = http://api.weatherapi.com/v1/current.json?key=somekey&param=somevalue

        const reponse = await axios.get(baseUrl)
            .catch(error => RequestHandler.handleError(error));
        return reponse;

    }
    
}

module.exports = BaseAPI;