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
    Util: require('./Utils/Util'),
    //REST
    RequestHandler: require('./rest/RequestHandler'),
    WeatherAPIError: require('./rest/WeatherAPIError'),
    //REST\API
    APItypes: require('./rest/api//api-types.json'),
    BaseAPI: require('./rest/api/BaseAPI'),
    CurrentAPI: require('./rest/api/CurrentAPI'),
    ForecastAPI: require('./rest/api/ForecastAPI'),
    SearchAPI: require('./rest/api/SearchAPI'),
    TimezoneAPI: require('./rest/api/TimezoneAPI'),
    HistoryAPI: require('./rest/api/HistoryAPI'),
    IPAPI: require('./rest/api/IPAPI'),
    SportsAPI: require('./rest/api/SportsAPI'),
    AstronomyAPI: require('./rest/api/AstronomyAPI'),
    //Errors
    Errors: require('./errors'),
};