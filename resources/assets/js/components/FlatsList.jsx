/*** @jsx React.DOM */
var React = require('react');
var FlatsItem = require('./FlatsItem.jsx');
var FlatServerActionCreators = require('../actions/FlatServerActionCreators.jsx');

var SearchStore = require('../stores/SearchStore.jsx');

function getLoadingFromStore() {
    var lF = SearchStore.loadingFlag();
    return {
        loadingFlag : lF
        };
    }

var FlatsList = React.createClass ({

scrollBotton:function(e) {
       if($(window).scrollTop() + window.innerHeight == $(document).height()) {
           if(!this.state.loadingFlag){
               this.setState({loadingFlag:true}, function(){

           query = {
               road: this.props.road,
               page: this.props.current_page,
               room: this.props.room,
               min_price : this.props.min_price,
               max_price : this.props.max_price,
               type : this.props.type
               };
           FlatServerActionCreators.getMoreFlats(query);
           });
           }
    }
},
    getInitialState: function(){
        return {
            loadingFlag:false
            }
        },
    componentDidMount: function(){
        window.addEventListener('scroll', this.scrollBotton);
        SearchStore.addChangeListener(this._onChange);
        },


    componentWillUnmout: function(){
            SearchStore.removeChangeListener(this._onChange);
        },
    render: function() {
        var flats = this.props.flats.map(function(flat){
                return <FlatsItem key={flat.id}
                         adress={flat.adress} 
                         road={flat.road} 
                         price={flat.price}
                         id={flat.id}
                         sall={flat.sall}
                         room={flat.room}
                         floor={flat.floor}
                         phone={flat.phone}
                         fur={flat.fur}
                         fridge={flat.fridge}
                         metro={flat.metro}
                         type={flat.type}
                         />
            })
        return (
            <div className="flats-grid cf">
                {flats}
            </div>
        )
        },

        _onChange: function(){
            this.setState(getLoadingFromStore());
            }
       });

module.exports = FlatsList;
