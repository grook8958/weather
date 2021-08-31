const WeatherClient = require('./src/WeatherClient');

const weatherClient = new WeatherClient({
    apiKey: '43c95c3f35494d7a831154235211308',
    language: 'FRENCH',
    defaultLocation: 'England'
});


weatherClient.on('ready', async () => {
    const weather = await weatherClient.current.get('Nancy')
    console.log(weather.current);
}) 
