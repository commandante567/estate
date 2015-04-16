var React = require('react');
var ShowStore = require('../stores/ShowStore.jsx');
var ShowMap = require('./ShowMap.jsx');
var CallForm = require('./CallForm.jsx');


function getStateFromStores() {

  var tmp = ShowStore.showId();
  console.log(tmp);
  return tmp  ;
}

function format(n, currency) {
    n = parseInt(n);
    var t =  n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
    return t.substring(0, t.length-3)  + " " + currency;
}

function typeFormat(n) {
        if(n == 'room') {
            n = 'Комната'
            } else {
            n = 'Квартира'    
            }
        return n;
    }
var ShowSection = React.createClass({

    getInitialState: function(){
        return ShowStore.showId();
    },

    flatChanged: function(){

    },

    componentDidMount: function(){
        ShowStore.addChangeListener(this._onChange);
    },

    componentWillUnmout: function(){
        ShowStore.removeChangeListener(this._onChange);
    },



    render: function (){
        var price = format(this.state.price,'руб.');
        var type = typeFormat(this.state.type);
        return (
                 <div className="item">
                     <div id="call-back-wrap">
                        <CallForm 
                            id={this.state.id}
                        />
                    </div>
                 <div className="item-header cf">
                    <div className="header-logo">
                      <img src="/img/small_logo.png" alt="Домашнее"/>
                    </div>
                    <div className="social-icons">
                        <ul className="inline-list">
                            <li><a href="#"><img src="/img/icons/1429129152_vk-64.png" alt="vk" title="vk"/></a></li>
                            <li><a href="#"><img src="/img/icons/1429129183_social_3-64.png" alt="fb" title="fb"/></a></li>
                            <li><a href="#"><img src="/img/icons/1429129282_social_8-128.png" alt="twitter" title="twitter"/></a></li>
                        </ul>
                    </div>
                  </div>
                  <div className="item-main cf">
                    <div className="cf">
                    <div className="item-info">
                        <div className="cf">
                            <div className="item-number">
                                <h4>Номер объекта <span className="item-number-span">AY-{this.state.id}</span></h4>
                            </div>
                            <div className="item-type">
                                <h4 className={this.state.type}>{type}</h4>
                            </div>
                        </div>
                    <div className="item-title">
                      <h1>{this.state.adress}</h1>
                    </div>
                    <div className="item-road">
                      <h2>{this.state.road}</h2>
                    </div>
                      <table>
                        <tr>
                          <td>Цена</td>
                          <td>{price}</td>
                        </tr>
                        <tr>
                          <td>Комиссия</td>
                          <td>8 000 руб.</td>
                        </tr>
                        <tr>
                          <td>Комнаты</td>
                          <td>{this.state.room}</td>
                        </tr>
                        <tr>
                          <td>Общая площадь</td>
                          <td>{this.state.sall}</td>
                        </tr>
                        <tr>
                          <td>Этаж</td>
                          <td>{this.state.floor}</td>
                        </tr>
                      </table>
                      <div className="flat-icons">
                        <ul className="inline-list">
                            <li className={'icon' + this.state.phone}>
                                <img src='/img/icons/phone.png' alt="Телефон" title="Телефон"/>
                                <span>Телефон</span>
                            </li>
                            <li className={'icon' + this.state.fur}>                            
                                <img src='/img/icons/furniture.png' alt="Мебель" title="Мебель"/>
                                <span>Мебель</span>
                            </li>
                            <li className={'icon' + this.state.fridge}>
                                <img src='/img/icons/fridge.png' alt="Холодильник" title="Холодильник"/>
                                <span>Холодильник</span>
                            </li>
                            <li className={'icon' + this.state.metro}>
                                <img src='/img/icons/metro.png' alt="Метро" title="Метро"/>
                                <span>Метро</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="item-meta">
                      <div className="item-pic">
                        <img src="/img/200.png"/>
                      </div>
                      <div className="item-contacts">
                        <table>
                          <tr>
                            <td><a href="#"> <i className="fa fa-phone"></i>992-12-12</a></td>
                            <td><a href="#"><img src="/img/icons/Envelope.png" alt="Написать" title="Написать"/></a></td>
                            <td><a href="#"><img src="/img/icons/skype.png" alt="Skype" title="Skype"/></a></td>
                          </tr>
                          <tr>
                            <td colSpan="3" className="call-back"><a href="#call-back" onClick={this._handleCallBack}>Обратный звонок</a></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    </div>
                    <div className="item-map">
                        <ShowMap 
                            mapCenterLat = {this.state.lat} 
                            mapCenterLng = {this.state.long}
                        />
                    </div>
                  </div>
                  </div>
               );
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    _handleCallBack: function(event) {
        event.preventDefault;
        $('#call-back-wrap').show();
        }

});

module.exports = ShowSection;
