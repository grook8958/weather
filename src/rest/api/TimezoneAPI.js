const BaseAPI = require('./BaseAPI');

class TimezoneAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'timezone';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = TimezoneAPI;