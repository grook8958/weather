const BaseAPI = require('./BaseAPI');

class HistoryAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'history';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = HistoryAPI;