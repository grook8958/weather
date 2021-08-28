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
 * @typedef {Object} Constants Constants that can be used in an enum or object-like way.
 * @property {Language} Languages The language to be used by the API
 * @property {WeatherAPIError} APIErrors All the possible API Errors matching it's error code
 * @property {APILanguageCode} APILanguageCodes All the language codes matching it's full name
 * @property {LocationResolvable} LocationResolvable A string or a number that can be resolved into an APILocation
 * @property {APILocation} APILocation A location object retuned by the API 
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
 * @property {String} name The name of this city
 * @property {String} region The region in which the city is
 * @property {String} country The country of this city
 * @property {Number} latitude The latitude of the location
 * @property {Number} longitude The longitude of the location
 * @property {String} timezone The TimeZone Identifier of this location (e.g Europe/London)
 * @property {Number} local_time_epoch The local time epoc (e.g 1630076214)
 * @property {Number} local_time The local_time of the location (e.g 2021-08-27 15:56)
 */