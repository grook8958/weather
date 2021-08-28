'use strict';

const { register } = require('./WeatherError');

const Messages = {
  INVALID_API_KEY: 'An invalid API key was provided, get your own at https://weatherapi.com/pricing.aspx',
  API_KEY_MISSING: 'Request to use API key, but no API key was provided',

  INVALID_TYPE: (name, expected, an = false) => `${name} must be a${an ? 'n' : ''} ${expected}.`,

  UNKNOWN_METHOD: 'Invalid HTTP method was provided, the valid methods are: GET, POST, PUT, DELETE, PATCH',
  METHOD_NOT_ALLOWED: (method) => `HTTPS method "${method}" is not supported`,

  UKNOWN_API_ENDPOINT: 'The specified API endpoint is not available'
};

for (const [name, message] of Object.entries(Messages)) register(name, message);
