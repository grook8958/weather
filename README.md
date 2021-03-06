<p> 
    <a href="https://www.npmjs.com/package/theweatherapi"><img src="https://img.shields.io/npm/v/theweatherapi.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/theweatherapi"><img src="https://img.shields.io/npm/dt/theweatherapi?color=blue&label=Dowloads" alt="NPM downloads" /></a>
</p>
<a href="https://www.weatherapi.com/" title="Free Weather API"><img src='https://cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com"></a>

# TheWeatherAPI v2!!

A package to retrieve weather data from https://www.weatherapi.com/.
It is easy to use, and it covers 10% of the API, Current Weather only for now (100% Coming Soon™).

Now v2! Introducing the Forecast API; get the forecast of a location for up to 6 days!

# Features
    - Current Weather API
    - Forecast Weather API

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
    const weatherInfo = client.current.weather;
    const weatherLocation = client.current.location; 

    //Log the data to the console
    console.log(`Current Weather of ${client.defaultLocation}:`, weatherInfo);
    console.log(`Current Weather Location of ${client.defaultLocation}:`, weatherLocation);

    //Get the weather from another location with Air Quality Information
    const { weather, location, aqi } = await client.current.get('London', true);

    //Log the results
    console.log(weather, location, aqi);
});
```

## How can I access the APIs that are not implemented using theweatherapi?
You can use non-implemented APIs using the REST module like this:
**Note: You will have to know which params to use for the API or refer to api-types.json**
```js
//Import the BaseWeatherClient to use it's features without passing any options (using the normal client will throw errors)
const { BaseWeatherClient } = require('theweatherapi');

//Create a new Instance of the BaseClient
const baseClient = new BaseWeatherClient();

//Access the search API and make a call to the API
// WARNING: The data won't be formatted the same, the API module only takes care of the request part.
const response = await client.api.search.get({key: 'somekey', q: 'Paris'});
console.log(response);
```
## Roadmap
- [x] Current Weather API
- [x] Forecast Weather API
- [ ] History Weather API
- [ ] Astronomy API
- [ ] IP look-up API (not comfirmed)
- [ ] Time Zone API
- [ ] Sports API

## Documentation

Visit [this](./documentation/home.md) page. (Coming Soon™)

<p>
    Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
</p>