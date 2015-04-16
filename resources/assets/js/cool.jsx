/** @jsx React.DOM */
var React = require('react');
var FlatWebApiUtils = require('./utils/FlatWebApiUtils.jsx');
var FlatsApp = require('./components/FlatApp.jsx');


window.React  = React;

FlatWebApiUtils.getAllFlats();

$( document ).ajaxComplete(function() {
    React.render(<FlatsApp />, document.getElementById('flats'));
});
