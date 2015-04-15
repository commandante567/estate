/*** @jsx React.DOM */
var React = require('react');
var FlatServerActionCreators = require('../actions/FlatServerActionCreators.jsx')

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

var FlatsItem = React.createClass({
    
    render:function(){
    var price = format(this.props.price,'руб.');        
    var type = typeFormat(this.props.type);
    
    return (
            <div className="flat-item cf">
                <div className="flat-desc">
                <div className="flat-title cf">
                    <div className="flat-address">
                        <h3>
                           <a href={'#' +this.props.id} onClick={this._handleMoreClick}> 
                        <span>{this.props.adress}</span>
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="flat-meta cf">
                    <div className="flat-road">
                    <p><i className="fa fa-subway"></i>
                        {this.props.road}</p>
                    </div>
                    <div className="flat-room">
                        <p><span>Комнат: {this.props.room},</span> <span>Площадь: {this.props.sall},</span> <span>Этаж: {this.props.floor}</span></p>
                    </div>
                    
                </div>
                </div>
                <div className="flat-price">
                    <h3 className={'type-' + this.props.type}>{type}</h3>
                    <h2>{price}</h2>
                </div>
            </div>
        );
        },

        _handleMoreClick: function(event) {
            FlatServerActionCreators.receiveId(this.props.id);
        }

    });


module.exports = FlatsItem;
