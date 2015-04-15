/** @jsx React.DOM */
var React = require('react');
var FlatWebApiUtils = require('./utils/FlatWebApiUtils.jsx');

window.React  = React;

var FlatsApp = require('./components/FlatApp.jsx');

FlatWebApiUtils.getAllFlats();


$( document ).ajaxComplete(function() {
    React.render(<FlatsApp />, document.getElementById('flats'));
});
