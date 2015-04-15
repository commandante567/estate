var FlatConstants = require('../constants/FlatConstants.jsx');
var FlatServerActionCreators = require('../actions/FlatServerActionCreators.jsx');
var FlatShowActionCreators = require('../actions/FlatShowActionCreators.jsx');

var FlatListActionCreators = require('../actions/FlatListActionCreators.jsx');

var ServerApiUrl = FlatConstants.ServerApiUrl;

module.exports = {

    getAllFlats: function(){

        $.ajax({
            url: ServerApiUrl.URL,
        type:'POST',
        dataType: 'json',
        data: {
            '_token': $('meta[name=csrf-token]').attr('content')
        },
        success: function(data) {
            FlatServerActionCreators.receiveAll(data);
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(ServerApiUrl.URL, status, err.toString());
        }.bind(this)
        });
    },


    getFlatId: function(id){
        $('#flat-loading').show('fast');

        $.ajax({
            url: ServerApiUrl.ID,
            dataType: 'json',
            type: 'POST',
            beforeSend: function() {
            },
            complete: function() {
                $('#flat-loading').hide('fast');
            },
            data:{
                id:id,
            '_token': $('meta[name=csrf-token]').attr('content'),
            },
            success : function(flatI){
                FlatShowActionCreators.getFlat(flatI);
            }.bind(this),
            error:function(xhr, status,err){
                console.error(ServerApiUrl.URL, status, err.toString());
            }.bind(this)
        });

    },

    searchFlat: function(query) {
        $.ajax({
            url: ServerApiUrl.URL,
        dataType: 'json',
        type: 'POST',
        data:{
            road:query.road,
            room:JSON.stringify(query.room),
             '_token': $('meta[name=csrf-token]').attr('content'),
            min_price:query.min_price,
            max_price:query.max_price,
            type:query.type
        },
        beforeSend: function(){
            console.log(query);
            },
        success: function(data) {
            FlatListActionCreators.showFlats(data);
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(ServerApiUrl.URL, status, err.toString());
        }.bind(this)
        });
    },

    getMoreFlats: function(query) {
        $.ajax({
            url: ServerApiUrl.URL,
        dataType: 'json',
        type: 'POST',
        beforeSend: function(){
            console.log(query);
            },
        data: {
            '_token': $('meta[name=csrf-token]').attr('content'),
            road:query.road,
            room:JSON.stringify(query.room),
            page:query.page+1,
            min_price:query.min_price,
            max_price:query.max_price,
            type:query.type
        },
        success: function(data) {
            FlatListActionCreators.addMoreFlats(data);
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(ServerApiUrl.URL, status, err.toString());
        }.bind(this)
        }); 
    }

};

