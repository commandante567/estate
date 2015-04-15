var FlatAppDispather = require('../dispather/FlatAppDispather.jsx');
var FlatConstants = require('../constants/FlatConstants.jsx');

var FlatWebAPIUtils = require('../utils/FlatWebAPIUtils.jsx');

var ActionTypes = FlatConstants.ActionTypes;

module.exports = {


    getFlat : function(flatItem){
        FlatAppDispather.dispatch({
            type:ActionTypes.GET_ID,
            flatItem : flatItem[0]
        });
    }

};
