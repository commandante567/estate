/*** @jsx React.DOM */
var React = require('react');

var SideMenu = React.createClass({
    
    render: function(){
        return (
            <section className="left-bar">
            <nav className="left-nav main-nav">
                <ul>
                    <li><a href="#">
                        <i className="fa fa-comments-o fa-3x"></i>
                    FAQ</a></li>
                    <li><a href="#">
                    <i className="fa fa-gift fa-3x"></i>
                    Акции</a></li>
                    <li><a href="#">
                        <i className="fa fa-lightbulb-o fa-3x"></i>
                    Полезное</a></li>
                    <li><a href="#">
                        <i className="fa fa-vk fa-3x"></i>
                        ВК</a></li>
                    <li><a href="#">Твиттер</a></li>
                </ul>
            </nav>
        </section>
        );
        
        }
    
    });

module.exports = SideMenu;
