const WeatherAPIError = require('./src/errors/api/WeatherAPIError');

const axios = require('axios');

(async () => {
    await axios.get('http://api.weatherapi.com/v1/current.json?key=abcd&q=London&aqi=no')
        .catch((error) => {
            console.error(error.response.data)
            throw new WeatherAPIError(error.response.data, error.response.config)
        })
    
    
})()