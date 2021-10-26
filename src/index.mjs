import mod from './index.js';

export default mod;

//Clients
export const BaseWeatherClient = mod.BaseWeatherClient;
export const WeatherClient = mod.WeatherClient;
//Structures
export const Current = mod.Current;
export const Location = mod.Location;
export const Aqi = mod.Aqi;
export const Alert = mod.Alert;
export const Forecast = mod.Forecast;
//Utils
export const Constants = mod.Constants;
export const Utils = mod.Util;
//REST
export const RequestHandler = mod.RequestHandler;
export const WeatherAPIError = mod.WeatherAPIError;
//REST\API
export const APItypes = mod.APItypes;
export const BaseAPI = mod.BaseAPI;
export const CurrentAPI = mod.CurrentAPI;
export const ForecastAPI = mod.ForecastAPI;
export const SearchAPI = mod.SearchAPI;
export const TimezoneAPI = mod.TimezoneAPI;
export const HistoryAPI = mod.HistoryAPI;
export const IPAPI = mod.IPAPI;
export const SportsAPI = mod.SportsAPI;
export const AstronomyAPI = mod.AstronomyAPI;
//Errors
export const Errors = mod.Errors;