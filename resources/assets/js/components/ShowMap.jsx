var React = require('react');
var ShowStore = require('../stores/ShowStore.jsx');

var ShowMap = React.createClass({
    getDefaultProps: function () {
        return {
            initialZoom: 15,
        };
    },
    componentDidMount: function (rootNode) {
        var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom
        },
        map = new google.maps.Map(this.getDOMNode(), mapOptions);
        marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map, marker:marker}); 
    },
    mapCenterLatLng: function () {
        var props = this.props;
        return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
    },
     componentWillUnmout: function(){
    },

    componentWillReceiveProps: function() {
      var mapOptions = {
            center: this.mapCenterLatLng(),
            zoom: this.props.initialZoom
        },
        map = this.state.map;
        map.setCenter(this.mapCenterLatLng());
        marker = this.state.marker;
        marker.setPosition(this.mapCenterLatLng());
        //marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});
        this.setState({map: map, marker:marker }); 
        },


    render: function(){
        return (
            <div className='map-gic'></div>
        );
        }
    });


module.exports = ShowMap;
