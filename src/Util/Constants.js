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
 * @typedef {Object} Constants Constants that can be used in an enum or object-like way.
 * @property {APILanguage} APILanguages The language to be used by the API
 */