var FlatAppDispather = require('../dispather/FlatAppDispather.jsx');
var FlatConstants = require('../constants/FlatConstants.jsx');

var FlatWebAPIUtils = require('../utils/FlatWebAPIUtils.jsx');

var ActionTypes = FlatConstants.ActionTypes;

module.exports = {

    receiveAll : function(rawFlats) {
        FlatAppDispather.dispatch({
            type: ActionTypes.RECEIVE_RAW_FLATS,
        rawFlats : rawFlats
        });   
    },

    receiveId : function(flatId) {
        FlatAppDispather.dispatch({
            type: ActionTypes.RECEIVE_ID,
        rawFlat : flatId
        });   
        FlatWebAPIUtils.getFlatId(flatId);
    },

    searchFlat : function(query) {
        FlatAppDispather.dispatch({
            type: ActionTypes.SEARCH_FLAT,
            query : query
            });
        FlatWebAPIUtils.searchFlat(query);
    },

    getMoreFlats : function(query) {
        FlatAppDispather.dispatch({
            type: ActionTypes.GET_MORE,
            query: query
            });
        FlatWebAPIUtils.getMoreFlats(query);
    },

    callBack : function(query) {
        FlatAppDispather.dispatch({
            type: ActionTypes.CALL_BACK_SEND,
            query: query
            });
        FlatWebAPIUtils.callBackSend(query);
        }

};
