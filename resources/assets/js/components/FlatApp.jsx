/*** @jsx React.DOM */
var React = require('react');
var SearchSection = require('./SearchSection.jsx');
var ShowSection = require('./ShowSection.jsx');
var ShowStore = require('../stores/ShowStore.jsx');
var IntroSection = require('./IntroSection.jsx');

function getIntroFromStores() {
    var state = ShowStore.getIntro();
    return{
        intro : state,
        mountedFlag : false
        };
    }

var FlatApp = React.createClass({


    getInitialState:function() {
        return getIntroFromStores();
        },

    componentDidMount: function(){
        ShowStore.addChangeListener(this._onChange);
    },

    componentWillUnmout: function(){
        ShowStore.removeChangeListener(this._onChange);
    },

    render: function() {
        
        var showSection;
        if (!this.state.intro) {
            showSection = <ShowSection />;
            } else {
            showSection = <IntroSection />;
        }
        return (

            <div className="flats-app">
                
                <div className="left-section">
                    <SearchSection />
                </div>
                <div className="right-section">
                    { showSection }
                     <div id="flat-loading">
                        <i className="loader"></i>
                    </div>
                </div>
            </div>
        );
    },

    _onChange: function(){
       this.setState(getIntroFromStores());
        }
});

module.exports = FlatApp;
