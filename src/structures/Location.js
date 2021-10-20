const { APILocation } = require('../Utils/Constants');

/**
 * Represents a formatted location object from the API 
 */
class Location {
  /**
   * @property {Number} latitude 
   * @property {Number} longitude
   * @property {String} name 
   * @property {String} region  
   * @property {String} country 
   * @property {String} timezone
   * @property {Number} timestamp
   * @property {String} time
   * @typedef Location
   */

  /**
   * The contructor of this class
   * @param {APILocation} data The location data returned by the API
   */
  constructor(data) {
    
    /**
     * The latitude in decimal degree of the location
     * @type {Number}
     */
    this.latitude = data.lat ?? null;

    /**
     * The longitude in decimal degree of the location
     * @type {Number}
     */
    this.longitude = data.lon ?? null;

    /**
     * The name of the location
     * @type {String}
     */
    this.name = data.name ?? null;

    /**
     * The region of the location
     * @type {String}
     */
    this.region = data.region ?? null;

    /**
     * The country of the location
     * @type {String}
     */
    this.country = data.country ?? null;

    /**
     * The name of the timezone of the location
     * @type {String} 
     */
    this.timezone = data.tz_id ?? null;

    /**
     * The local timestamp of the location
     * @type {Number}
     */
    this.timestamp = data.localtime_epoch ?? null;

    /**
     * The local date & time of the location
     * @type {String}
     */
    this.time = data.localtime ?? null;
  }

  /**
   * Returns a JSON of object of this class
   * @returns {Object}
   */
  toJSON() {
    const { name, region, country, timezone, timestamp, time} = this;

    return {
      name,
      region,
      country,
      timezone,
      timestamp,
      time
    };
  }
}

module.exports = Location;