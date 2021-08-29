const WeatherClient = require('./src/WeatherClient');

const weather = new WeatherClient({
    apiKey: '43c95c3f35494d7a831154235211308',
    language: 'FRENCH',
    defaultLocation: 'London'
});


weather.on('ready', () => {
    console.log(weather.current)
}) 