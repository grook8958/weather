const BaseAPI = require('./BaseAPI');

class IPAPI extends BaseAPI {
    constructor() {
        super()
        this.endpoint = 'ip';
        this.method = this.apiTypes.v1[this.endpoint]?.method;
        this.params = this.apiTypes.v1[this.endpoint]?.params;
    }
    
}

module.exports = IPAPI;