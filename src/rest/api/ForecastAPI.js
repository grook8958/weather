const BaseAPI = require('./BaseAPI');

class ForecastAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'forecast';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = ForecastAPI;