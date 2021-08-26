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
 * @typedef {string} APILanguage
 */
exports.APILanguages = createEnum([
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
 * @property {APILanguage} APILanguages The language to be used by the API
 * @property {WeatherAPIError} APIErrors All the possible API Errors matching it's error code
 */