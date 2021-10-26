const BaseAPI = require('./BaseAPI');

class SearchAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'current';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = SearchAPI;