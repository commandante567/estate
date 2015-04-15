var React = require('react');
var FlatsList = require('./FlatsList.jsx');
var FlatsForm = require('./FlatsForm.jsx');
var SearchStore = require('../stores/SearchStore.jsx');

function getStateFromStores() {
    var startState = SearchStore.getAll();
    return {
       flats: startState.data,
        current_page: startState.current_page,
        last_page: startState.last_page,
        loading: startState.loading, 
        road: startState.road,
        room: startState.room,
        min_price : startState.min_price,
        max_price : startState.max_price,
        type : startState.type
    };
}


var SearchSection = React.createClass({

    getInitialState: function(){
        return getStateFromStores();    
    },

    componentDidMount: function(){
        SearchStore.addChangeListener(this._onChange);
    },

    componentWillUnmout: function(){
        SearchStore.removeChangeListener(this._onChange);
    },
    render: function(){
            return ( 
                <div>
                    <div className="form-section">
                        <FlatsForm />
                    </div>
                    <div className="search-section">
                        <FlatsList flats={this.state.flats}
                                current_page={this.state.current_page}
                                last_page={this.state.last_page}
                                page={this.state.page}
                                road={this.state.road}
                                room={this.state.room}
                                min_price={this.state.min_price}
                                max_price={this.state.max_price}
                                type={this.state.type}
                        />
                    </div>
                    <div className="loading-more">
                        <p>Загружаем еще</p>
                    </div>
                </div>
            );
        },

        _onChange: function() {
        this.setState(getStateFromStores());
    }
    });

module.exports = SearchSection;
