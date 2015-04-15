/*** @jsx React.DOM */
var React = require('react');

var IntroSection = React.createClass({

    render: function(){
            return (

                <div className="intro-wrap">
                    <div className='logo-wrap'>
                        <img src="/img/logo.png" alt="Уютное агенство"/>
                    </div> 
                    <div className="hero-text-wrap">
                        <h1>Добро пожаловать!</h1>
                    </div>
                </div>
            );
        }

    });

module.exports = IntroSection;
