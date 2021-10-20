
module.exports = {
    //Clients
    BaseWeatherClient: require('./client/BaseWeatherClient'),
    WeatherClient: require('./client/WeatherClient'),

    //Structures
    Current: require('./structures/Current'),
    Location: require('./structures/Location'),
    Aqi: require('./structures/Aqi'),
    Alert: require('./structures/Alert'),
    Forecast: require('./structures/Forecast'),

    //Utils
    Constants: require('./Utils/Constants'),
    Util: require('./Utils/Util')
    
};