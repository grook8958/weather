const BaseAPI = require('./BaseAPI');

class SearchAPI extends BaseAPI {
    constructor() {
        super()
        this.type = 'search'
    }
    
}

module.exports = SearchAPI;
