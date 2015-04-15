var keyMirror = require('keymirror');

module.exports = {
    
    ServerApiUrl: ({
        URL: '/api/flats/search',
        ID: '/api/flats/id'
        }),

    ActionTypes: keyMirror ({
        RECEIVE_RAW_FLATS : null,
        RECEIVE_ID :null,
        GET_ID : null,
        SHOW_LIST : null,
        SEARCH_FLAT : null,
        GET_MORE : null,
        TAKE_MORE : null
        
        })

    };
