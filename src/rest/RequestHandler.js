module.exports = async (request) => {
    const axios = require('axios');
    const Util = require('../Util/Util');
    const { TypeError, Error: WeatherError, RangeError } = require('../errors');
    const WeatherAPIError = require('./WeatherAPIError');

    const baseUrl = 'http://api.weatherapi.com/v1/';

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
            const reponse = axios.get(baseUrl)
                .catch(error => handleError(error));
            return reponse
        default: throw new WeatherError('METHOD_NOT_ALLOWED', method);
    }
}

const handleError = (error) => {
    if (error.response.status === 404) throw new WeatherError('UNKOWN_API_ENDPOINT');
    throw new WeatherAPIError(error.response.data, error.response.config);
}