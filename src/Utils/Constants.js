function createEnum(keys) {
    const obj = {};
    for (const [index, key] of keys.entries()) {
      if (key === null) continue;
      obj[key] = index;
      obj[index] = key;
    }
    return obj;
}

/**
 * The language to be used by the weather API:
 * * `ARABIC`
 * * `BENGALI`
 * * `BULGARIAN`
 * * `CHINESE_SIMPLIFIED`
 * * `CHINESE_TRADITIONAL`
 * * `CZECH`
 * * `DANISH`
 * * `DUTCH`
 * * `FINISH`
 * * `FRENCH`
 * * `GERMAN`
 * * `GREEK`
 * * `HINDI`
 * * `HUNGARIAN`
 * * `ITALIAN`
 * * `JAPANESE`
 * * `JAVANESE`
 * * `KOREAN`
 * * `MANDARIN`
 * * `MARATHI`
 * * `POLISH`
 * * `PORTUGESE`
 * * `PUNJABI`
 * * `ROMANIAN`
 * * `RUSSIAN`
 * * `SERBIAN`
 * * `SINHALESE`
 * * `SLOVAK`
 * * `SPANISH`
 * * `SWEDISH`
 * * `TAMIL`
 * * `TELUGU`
 * * `TURKISH`
 * * `UKRAINIAN`
 * * `URDU`
 * * `VIETNAMESE`
 * * `WU (Shanghainese)`
 * * `XIANG`
 * * `YUE (Cantonese)`
 * * `ZULU` 
 * @typedef {string} Language
 */
exports.Languages = createEnum([
    null,
    'ARABIC',
    'BENGALI',
    'BULGARIAN',
    'CHINESE_SIMPLIFIED',
    'CHINESE_TRADITIONAL',
    'CZECH',
    'DANISH',
    'DUTCH',
    'FINISH',
    'FRENCH',
    'GERMAN',
    'GREEK',
    'HINDI',
    'HUNGARIAN',
    'ITALIAN',
    'JAPANESE',
    'JAVANESE',
    'KOREAN',
    'MANDARIN',
    'MARATHI',
    'POLISH',
    'PORTUGESE',
    'PUNJABI',
    'ROMANIAN',
    'RUSSIAN',
    'SERBIAN',
    'SINHALESE',
    'SLOVAK',
    'SPANISH',
    'SWEDISH',
    'TAMIL',
    'TELUGU',
    'TURKISH',
    'UKRAINIAN',
    'URDU',
    'VIETNAMESE',
    'WU',
    'XIANG',
    'YUE',
    'ZULU'
])

/**
 * The language code representing a Language
 * @typedef {number} APILanguageCode
 */
exports.APILanguageCodes = { 
  ARABIC: 'ar',
  BENGALI:'bn',
  BULGARIAN: 'bg',
  CHINESE_SIMPLIFIED:'zh',
  CHINESE_TRADITIONAL: 'zh_tw',
  CZECH: 'cs',
  DANISH: 'da',
  DUTCH: 'nl',
  FINISH: 'fi',
  FRENCH: 'fr',
  GERMAN: 'de',
  GREEK: 'el',
  HINDI: 'hi',
  HUNGARIAN: 'hu',
  ITALIAN: 'it',
  JAPANESE: 'ja',
  JAVANESE: 'jv',
  KOREAN: 'ko',
  MANDARIN: 'zh_cmn',
  MARATHI: 'mr',
  POLISH: 'pl',
  PORTUGESE: 'pt',
  PUNJABI: 'pa',
  ROMANIAN: 'ro',
  RUSSIAN: 'ru',
  SERBIAN: 'sr',
  SINHALESE: 'si',
  SLOVAK: 'sk',
  SPANISH: 'es',
  SWEDISH: 'sv',
  TAMIL: 'ta',
  TELUGU: 'te',
  TURKISH: 'tr',
  UKRAINIAN: 'uk',
  URDU: 'ur',
  VIETNAMESE: 'vu',
  WU: 'zh_wuu',
  XIANG: 'zh_hsn',
  YUE: 'zh_yue',
  ZULU: 'zu'
}

/**
 * The possible errors that can be encountered when using the API:
 * * API key not provided
 * * Parameter 'q' not provided
 * * API request url is invalid
 * * No location found matching parameter 'q'
 * * API key provided is invalid
 * * API key has exceeded calls per month quota
 * * API key has been disabled
 * * Internal application error
 * @typedef {String} WeatherAPIError 
 */
exports.APIErrors = {
  API_KEY_NOT_PROVIDED: 1002,
  PARAMETER_Q_NOT_PROVIDED: 1003,
  API_REQUEST_URL_IS_INVALID: 1005,
  NO_LOCATION_MATCHING_Q: 1006,
  INVALID_API_KEY: 2006,
  API_KEY_RATE_LIMITED: 2007,
  API_KEY_DISABLED: 2008,
  INTERNAL_APPLICATION_ERROR: 9999
}

/**
 * Boolean converters:
 * * true: `yes`
 * * false: `no`
 * * 1: `true`
 * * 0: `false`
 * @typedef {String} booleanConverter
 */
exports.booleanConverters = {
  true: 'yes',
  false: 'no',
  1: true,
  0: false
}




/**
 * @typedef {Object} Constants Constants that can be used in an enum or object-like way.
 * @property {Language} Languages The language to be used by the API
 * @property {WeatherAPIError} APIErrors All the possible API Errors matching it's error code
 * @property {APILanguageCode} APILanguageCodes All the language codes matching it's full name
 * @property {LocationResolvable} LocationResolvable A string or a number that can be resolved into an APILocation
 * @property {APILocation} APILocation A location object retuned by the API
 * @property {booleanConverter} booleanConverters A converter to transform booleans into words
 * @property {BaseWeatherClientOptions} BaseWeatherClientOptions The options of this client
 * @property {ForecastDay} ForecastDay The forecastday object
 * @property {APIAlert} APIAlert The API response of the Forecast Alert
 * @property {APIAqi} APIAqi The API response of the Air-Quality-Information
 */

/**
 * A location string that can be resolved into a location, can be
 * * a city name
 * * Latitude and Longitude
 * * US Zip code
 * * UK Postcode
 * * Cananda postal code
 * * metar:<metar code>
 * * iata:<3 digit airport code>
 * * auto:ip IP lookup
 * * IP address (IPv4 and IPv6 supported)
 * @see{@link http://https://www.weatherapi.com/docs/#intro-request}
 * @typedef {String|number} LocationResolvable
 */

/**
 * The API Reponse location
 * @typedef {Object} APILocation
 * @property {String} name The name of this location
 * @property {String} region The region in which the location is
 * @property {String} country The country of this location
 * @property {Number} lat The latitude of the location
 * @property {Number} lon The longitude of the location
 * @property {String} tz_id The TimeZone Identifier of this location (e.g Europe/London)
 * @property {Number} localtime_epoch The local time epoch (e.g 1630076214)
 * @property {String} localtime The local time of the location (e.g 2021-08-27 15:56)
 */

/**
 * @typedef {Object} BaseWeatherClientOptions
 * @property {apiKey} apiKey The API key
 * @property {Language} language The Language to be used by the API.
 * @property {LocationResolvable} defaultLocation The default location from wich to get the weather @requires
 */

/**
 * The API key to access the weather API
 * @see {@link https://weatherapi.com/pricing.aspx}
 * @typedef {String} apiKey
 */

/**
 * @typedef {Object} ForecastDay A daily forecast
 * @property {String} date The date of the forecast
 * @property {Number} timestamp The date timestamp of the forecast
 * @property {Day} day The weather forcast for the whole day
 * @property {Astro} astro The astronomy object
 * @property {Array<Hour>} hours An array of forecasts for all the hours of the day
 */

/**
 * @typedef {Object} Day
 * @property {Number} maxtemp_c The maximum temperature of the day in degrees Celsius
 * @property {Number} maxtemp_f The maximum temperature of the day in Fahrenheit
 * @property {Number} mintemp_c The minimum temperature of the day in degrees Celsius
 * @property {Number} minemp_f The minimum temperature of the day in Fahrenheit
 * @property {Number} avgtemp_c The average temperature of the day in degrees Celsius
 * @property {Number} avgemp_f The average temperature of the day in Fahrenheit
 * @property {Number} maxwind_mph The maximum wind speed in Miles-per-Hours
 * @property {Number} maxwind_kph The maximum wind speed in Kilometers-per-Hours
 * @property {Number} totalprecip_mm The total precipitation in milimeters
 * @property {Number} totalprecip_in The total precipitation in inches
 * @property {Number} avgvis_km The average visibility in Kilometers 
 * @property {Number} avgvis_miles The average visibility in Miles
 * @property {Number} avghumidity The average percentage of humidity
 * @property {Boolean} daily_will_it_rain Wether it will rain or not
 * @property {Number} daily_chance_of_rain The percentage of chance of raining
 * @property {Boolean} daily_will_it_snow Wether it will snow or not
 * @property {Number} daily_chance_of_snow The percentage of chance of snowing
 * @property {Condition} condition The condition object
 * @property {Number} uv The UV index of the day
 */

/**
 * @typedef {Object} Condition The condition object
 * @property {String} text
 * @property {String} icon
 * @property {Number} code
 */

/**
 * @typedef {Object} Astro The astro object
 * @property {String} sunrise The hour at wich the sun will rise
 * @property {String} sunset The hour at wich the sun will set
 * @property {String} moonrise The hour at wich the moon will rise
 * @property {String} moonset The hour at wich the moon will set
 * @property {String} moon_phase The phase at wich the moon is
 * @property {Number} moon_illumination The illumination of the moon
 */

/**
 * @typedef {Object} Hour The hour forecast object
 * @property {Number} timestamp The timestamp of the hour forecast
 * @property {String} time The time of the hour forecast
 * @property {Number} temp_c The temperature of the hour in degrees Celsius
 * @property {Number} temp_f The temperature of the hour in degrees Fahrenheit
 * @property {Boolean} is_day Wether it's the day or not
 * @property {Condition} condition The condition object of the hour
 * @property {Number} wind_mph The speed of the wind of the hour in Miles-per-Hours
 * @property {Number} wind_kph The speed of the wind of the hour in Kilometers-per-Hours
 * @property {Number} wind_degree The degree of the wind of the hour
 * @property {String} wind_dir The direction of the wind (ex: WSW)
 * @property {Number} pressure_mb The pressure Millibars
 * @property {Number} pressure_in The pressure in Inches
 * @property {Number} precip_mm The precipitations in Milimeters
 * @property {Number} precip_in The precipitation in Inches
 * @property {Number} humidity The percentage of humidity in the air
 * @property {Number} cloud The percentage of cloud coverage
 * @property {Number} feelslike_c The feelslike temperature in degrees Celsius
 * @property {Number} feelslike_f The feelslike temperature in degrees Fahrenheit
 * @property {Number} windchill_c The windchill in degrees Celsius
 * @property {Number} windchill_f The windchill in degrees Fahrenheit
 * @property {Number} heatindex_c The heatindex in degrees Celsius
 * @property {Number} heatindex_f The heatindex in degrees Fahrenheit
 * @property {Number} dewpoint_c The dewpoint in degrees Celsius
 * @property {Number} dewpoint_f The dewpoint in degrees Fahrenheit
 * @property {Boolean} will_it_rain Wether it will rain or not
 * @property {Number} chance_of_rain The percentage of chance of raining for the hour
 * @property {Boolean} will_it_snow Wether it will snow or not
 * @property {Number} chance_of_snow The percentage of chance of snowing for the hour
 * @property {Number} vis_km The visibility in Kilometers
 * @property {Number} vis_miles The visibility in Miles
 * @property {Number} gust_mph The gust speed in Miles-per-Hours of the hour
 * @property {Number} gust_kph The gust speed in Kilometers-per-Hours of the hour
 * @property {Number} uv The UV index of the hour
 */

/**
 * @typedef {Object} APIAlert
 * @property {String} headline Alert headline
 * @property {String} msgType Type of alert
 * @property {String} severity The severity of the alert
 * @property {String} urgency The urgency of the alert
 * @property {String} areas Areas affected
 * @property {String} category The category of the alert
 * @property {String} certainty The certainty of the alert
 * @property {String} event The Event
 * @property {String} note Notes of the alert
 * @property {Date} effective Effective
 * @property {String} expires The expire date
 * @property {String} desc The description of the alert
 * @property {String} instruction The instruction to follow
 */

/**
 * @typedef {Object} APIAqi
 * @property {Number} co The quantity of micro-grams of Carbon monoxide for each cubic-cube of air (µg/m3)
 * @property {Number} o3 The quantity of micro-grams of Ozone for each cubic-cube of air (µg/m3)
 * @property {Number} no2 The quantity of micro-grams of Nitrogen dioxide for each cubic-cube of air (µg/m3)
 * @property {Number} so2 The quantity of micro-grams of Sulphur donoxide for each cubic-cube of air (µg/m3)
 * @property {Number} pm2_5 The quantity of micro-grams of PM2.5 particles for each cubic-cube of air (µg/m3)
 * @property {Number} pm10 The quantity of micro-grams of PM10 particles for each cubic-cube of air (µg/m3)
 * @property {Number} us-epa-index US - EPA Standards.
 * * 1 means Good
 * * 2 means Moderate
 * * 3 means Unhealthy for sensitive group
 * * 4 means Unhealthy
 * * 5 means Very Unhealthy
 * * 6 means Hazardous 
 * @property {Number} gb-defra-index	
 */