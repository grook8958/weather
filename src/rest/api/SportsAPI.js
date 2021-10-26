const BaseAPI = require('./BaseAPI');

class SportsAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'sports';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = SportsAPI;