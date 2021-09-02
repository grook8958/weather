<p> 
    <a href="https://www.npmjs.com/package/theweatherapi"><img src="https://img.shields.io/npm/v/theweatherapi?color=green" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/theweatherapi"><img src="https://img.shields.io/npm/dt/theweatherapi?color=blue&label=Dowloads" alt="NPM downloads" /></a>
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com"></a>
</p>

# TheWeatherAPI

A package to retrieve weather data from https://www.weatherapi.com/.
It is easy to use, and it covers 10% of the API, Current Weather only for now (100% Coming Soon™).

# Features
    - Current Weather API

# Examples

How to get easily access the Current Weather:

``` js
// Import the WeatherClient from the package
const { WeatherClient } = require('theweatherapi');

// Create a new Instance of the WeatherClient
const client = new WeatherClient({
    apiKey: 'some_api_key',
    language: 'FRENCH',
    defaultLocation: 'Paris'
});

//Wait for the WeatherClient to enter Ready state
client.on('ready', async () => {
    //Get the current weather from the default location and the location of that weather
    const weather = client.current.weather;
    const weatherLocation = client.current.location; 

    //Log the data to the console
    console.log(`Current Weather of ${client.defaultLocation}:`, weather);
    console.log(`Current Weather Location of ${client.defaultLocation}:`, weatherLocation);

    //Get the weather from another location with Air Quality Information
    const currentWeatherData = await client.current.get('London', true);

    //Destructure the weather data into the weather object and location object
    const { weather2, location2 } = currentWeatherData;

    //Log the results
    console.log(weather2, location2);
});
```
This is still a beta expect may bugs

## Roadmap
- [x] Current Weather API
- [ ] Forecast Weather API
- [ ] History Weather API
- [ ] Astronomy API
- [ ] IP look-up API (not comfirmed)
- [ ] Time Zone API
- [ ] Sports API

<p>
    Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
</p>