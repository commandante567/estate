var FlatAppDispather = require('../dispather/FlatAppDispather.jsx');
var FlatConstants = require('../constants/FlatConstants.jsx');

var MicroEvent = require('../microevent.js')

var ActionTypes = FlatConstants.ActionTypes;


var CHANGE_EVENT = 'change';

var SearchStore = {
   
    flats: {},
   
    flatShow:{},

    info: {
        loadingFlag:false
        },

    query: {
        page:'',
        room:[],
        road:'',
        minPrice:'5000',
        maxPrice:'200000',
        type:''
        },

    getAll: function() {
        var info = {
            data: this.flats.data,
            current_page: this.flats.current_page,
            last_page: this.flats.last_page,
            road:this.query.road,
            page:this.flats.page,
            loadingFlag: this.info.loadingFlag,
            room: this.query.room,
            min_price: this.query.min_price,
            max_price: this.query.max_price,
            type: this.query.type
         };
        return info;
        },
   
    loadingFlag: function() {
        return this.info.loadingFlag;
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

SearchStore.dispatchToken = FlatAppDispather.register(function(action){
   
    switch(action.type){

        case ActionTypes.RECEIVE_RAW_FLATS:

            SearchStore.flats = action.rawFlats;

            break;

        case ActionTypes.SHOW_LIST :
            
            SearchStore.flats = action.flatItems;

            SearchStore.trigger('change');

            break;

        case ActionTypes.SEARCH_FLAT :
            
            SearchStore.query = action.query;

            SearchStore.trigger('change');

            break;

        case ActionTypes.GET_MORE :
            
            SearchStore.query = action.query;

            SearchStore.info.loadingFlag = true;

            SearchStore.trigger('change');

            break;
            
        case ActionTypes.TAKE_MORE :

           SearchStore.flats.data = SearchStore.flats.data.concat(action.flatItems.data);

           SearchStore.flats.current_page = action.flatItems.current_page;

           SearchStore.info.loadingFlag = false;
            
            SearchStore.trigger('change');

            break;
        default:

    }
    return true; // Needed for Flux promise resolution

});

MicroEvent.mixin(SearchStore);

module.exports = SearchStore;
