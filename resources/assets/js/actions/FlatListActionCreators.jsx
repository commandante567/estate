var FlatAppDispather = require('../dispather/FlatAppDispather.jsx');
var FlatConstants = require('../constants/FlatConstants.jsx');

var FlatWebAPIUtils = require('../utils/FlatWebAPIUtils.jsx');

var ActionTypes = FlatConstants.ActionTypes;

module.exports = {


    showFlats : function(flatItems){
        FlatAppDispather.dispatch({
            type:ActionTypes.SHOW_LIST,
            flatItems : flatItems
        });
    },

    addMoreFlats: function(flatItems){
        FlatAppDispather.dispatch({
            type:ActionTypes.TAKE_MORE,
            flatItems : flatItems
        });
    }

};
