const BaseAPI = require('./BaseAPI');

class AstronomyAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'astronomy';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = AstronomyAPI;