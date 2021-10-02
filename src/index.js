
module.exports = {
    //Clients
    BaseWeatherClient: require('./client/BaseWeatherClient'),
    WeatherClient: require('./client/BaseWeatherClient'),

    //Structures
    CurrentWeather: require('./structures/CurrentWeather'),
    Location: require('./structures/Location'),

    //Utils
    Constants: require('./Utils/Constants'),
    Util: require('./Utils/Util')
    
};