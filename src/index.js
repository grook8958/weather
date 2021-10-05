
module.exports = {
    //Clients
    BaseWeatherClient: require('./client/BaseWeatherClient'),
    WeatherClient: require('./client/WeatherClient'),

    //Structures
    CurrentWeather: require('./structures/Current'),
    Location: require('./structures/Location'),
    Aqi: require('./structures/Aqi'),
    Alert: require('./structures/Alert'),
    forecast: require('./structures/forecast'),

    //Utils
    Constants: require('./Utils/Constants'),
    Util: require('./Utils/Util')
    
};