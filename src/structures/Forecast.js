"use-strict";
//Imports
const WeatherClient = require('../client/WeatherClient');
const Location = require('./Location');
const Alert = require('./Alert');
const Aqi = require('./Aqi');
const { ForecastDay, booleanConverters } = require('../Utils/Constants');
const { LocationResolvable, APICurrentWeather } = require('../Utils/Constants');

/**
 * Represents the response from the API of the Forecast
 */
class Forecast {

  /**
   * The constructor of this class
   * @param {WeatherClient} WeatherClient
   */
  constructor(WeatherClient) {

    /**
     * The client that instantiated this
     * @type {WeatherClient}
     */
    this.client = WeatherClient;

    /**
     * The location of this Forecast
     * @type {Location}
     */
    this.location = null;

    /**
     * Wether to display Air-Quality-Information
     * @type {Boolean}
     * @default false
     */
    this.displayAqi = false;

    /**
     * Wether to display alerts
     * @type {Boolean}
     * @default false
     */
    this.displayAlerts = false;

    /**
     * The number of days to display forecast, must be between 1 and 10: 1 being today.
     * @type {Number}
     * @default 1
     */
    this.displayDays = 1;

    /**
     * The current weather of the location
     * @type {APICurrentWeather}
     */
    this.currentWeather = null;

    /**
     * An array of all the days requested
     * @type {Array<ForecastDay>}
     */
    this.days = [];

    /**
     * An array of weather alerts
     * @type {Array<Alert>}
     */
    this.alerts = [];

    /**
     * The Air-Quality-Information if requested
     * @type {Aqi}
     */
    this.aqi = null;

  }

  /**
   * Get forecast
   * @param {LocationResolvable} location The location from which to get the weather forecast
   * @param {Number} displayDays The number of days to display @default 1
   * @param {Boolean} displayAqi Wether it should give Air-Quality-Information @default false
   * @param {Boolean} displayAlerts Wether it should display Weather Alerts @default false
   */
  async get(location, displayDays = 1, displayAqi = false, displayAlerts = false) {

    //Request Object
    const request = {
      path: 'forecast.json',
      method: 'GET',
      key: this.client.apiKey,
      params: [`q=${location ?? this.client.defaultLocation}`, `days=${displayDays}`, `aqi=${booleanConverters[displayAqi]}`, `alerts=${booleanConverters[displayAlerts]}`, `lang=${this.client._language}`]
    }

    const response = await this.client.api.makeRequest(request);

    this.location = new Location(response.data.location);
    
    if (response.data.current.air_quality) {
      this.aqi = new Aqi(response.data.current.air_quality);
      delete response.data.current.air_quality;
    }

    if (response?.data?.alerts?.alert.length > 0) {
      for (const alert of response.data.alerts.alert) {
        this.alerts.push(new Alert(alert));
      }
    }

    this.currentWeather = response.data.current;

    this.days = response.data.forecast.forecastday;

    for (const day of this.days) {
      day.hours = day.hour
      delete day.hour;
      day.day.daily_will_it_rain = booleanConverters[day.day.daily_will_it_rain];
      day.day.daily_will_it_snow = booleanConverters[day.day.daily_will_it_snow];
      for (const hour of day.hours) {
        hour.is_day = booleanConverters[hour.is_day];
        hour.will_it_rain = booleanConverters[hour.will_it_rain];
        hour.will_it_snow = booleanConverters[hour.will_it_snow];
      }
    }
    return this;
  }
}

//Export the class
module.exports = Forecast;