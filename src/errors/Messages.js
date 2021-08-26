'use strict';

const { register } = require('./WeatherError');

const Messages = {
  INVALID_API_KEY: 'An invalid API key was provided, get your own at https://weatherapi.com/pricing.aspx',
  API_KEY_MISSING: 'Request to use API key, but no API key was provided'
};

for (const [name, message] of Object.entries(Messages)) register(name, message);
