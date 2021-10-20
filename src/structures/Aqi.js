const { APIAqi } = require('../Utils/Constants');

/**
 * Represents a formatted location object from the API 
 */
class Aqi {
/**
 * @typedef {Object} Aqi
 * @property {Number} co The quantity of micro-grams of Carbon monoxide for each cubic-cube of air (µg/m3)
 * @property {Number} o3 The quantity of micro-grams of Ozone for each cubic-cube of air (µg/m3)
 * @property {Number} no2 The quantity of micro-grams of Nitrogen dioxide for each cubic-cube of air (µg/m3)
 * @property {Number} so2 The quantity of micro-grams of Sulphur donoxide for each cubic-cube of air (µg/m3)
 * @property {Number} pm2_5 The quantity of micro-grams of PM2.5 particles for each cubic-cube of air (µg/m3)
 * @property {Number} pm10 The quantity of micro-grams of PM10 particles for each cubic-cube of air (µg/m3)
 * @property {Number} us_epa_index US - EPA Standards.
 * * 1 means Good
 * * 2 means Moderate
 * * 3 means Unhealthy for sensitive group
 * * 4 means Unhealthy
 * * 5 means Very Unhealthy
 * * 6 means Hazardous 
 * @property {Number} gb_defra_index The UK Defra Index
 */

  /**
   * The contructor of this class
   * @param {APIAqi} data The location data returned by the API
   */
  constructor(data) {
    /**
     * The quantity of micro-grams of Carbon monoxide for each cubic-cube of air (µg/m3)
     * @type {Number}
     */
    this.co = data.co ?? null;

    /**
     * The quantity of micro-grams of Ozone for each cubic-cube of air (µg/m3)
     * @type {Number}
     */
    this.o3 = data.o3 ?? null;

    /**
     * The quantity of micro-grams of Nitrogen dioxide for each cubic-cube of air (µg/m3)
     * @type {Number}
     */
    this.no2 = data.no2 ?? null;

    /**
     * The quantity of micro-grams of Sulphur donoxide for each cubic-cube of air (µg/m3)
     * @type {Number}
     */
    this.so2 = data.so2 ?? null;

    /**
     * The quantity of micro-grams of PM2.5 particles for each cubic-cube of air (µg/m3)
     * @type {Number}
     */
    this.pm2_5 = data.pm2_5 ?? null;

    /**
     * The quantity of micro-grams of PM10 particles for each cubic-cube of air (µg/m3)
     * @type {Number}
     */
    this.pm10 = data.pm10 ?? null;

    /**
     * US - EPA Standards.
     * * 1 means Good
     * * 2 means Moderate
     * * 3 means Unhealthy for sensitive group
     * * 4 means Unhealthy
     * * 5 means Very Unhealthy
     * * 6 means Hazardous
     * @type {Number} 
     */
    this.us_epa_index = data['us-epa-index'] ?? null;

    /**
     * The UK Defra Index
     * @type {Number}
     */
    this.gb_defra_index = data['gb-defra-index'] ?? null;
    
  }

  /**
   * Returns a JSON of object of this class
   * @returns {Object}
   */
  toJSON() {
    const { co, o3, no2, so2, pm2_5, pm10, us_epa_index, gb_defra_index } = this;

    return {
      co, 
      o3, 
      no2, 
      so2, 
      pm2_5, 
      pm10, 
      us_epa_index, 
      gb_defra_index
    };
  }
}

module.exports = Aqi;