var FlatAppDispather = require('../dispather/FlatAppDispather.jsx');
var FlatConstants = require('../constants/FlatConstants.jsx');

var MicroEvent = require('../microevent.js')

var ActionTypes = FlatConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var ShowStore = {
   
    flatShow:{},
    
    intro: true,

    
    getIntro: function() {
        return this.intro;
    },

    showId: function() {
        return this.flatShow;
    },

        addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
};

ShowStore.dispatchToken = FlatAppDispather.register(function(action){
   
    switch(action.type){

        case ActionTypes.GET_ID:
        
            ShowStore.flatShow = action.flatItem;

            ShowStore.intro = false;

            ShowStore.trigger('change');

            break;

        default:

    }
    return true; // Needed for Flux promise resolution

});


MicroEvent.mixin(ShowStore);

module.exports = ShowStore;
