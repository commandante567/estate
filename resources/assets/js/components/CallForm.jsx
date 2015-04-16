var React = require('react');
var FlatServerActionCreators = require('../actions/FlatServerActionCreators.jsx');


var CallForm = React.createClass({

    getInitialState: function(){
        return ({error: {}, submitted:null});
        },
    
    closeForm: function() {
        $('#call-back-wrap').hide();
        },

    isValid: function() {
        var fields = ['name','phone'];
        var errors = {};

        fields.forEach(function(field){
            var value = trim(this.refs[field].getDOMNode().value)
            if (!value){
                errors[field] = "Необходимо заполнить"
                this.refs[field].getDOMNode().className = 'error';
                } else {
                    this.refs[field].getDOMNode().className = 'good';
                    }
            }.bind(this))
            this.setState({errors: errors})
            
            var isValid = true 
            for(var error in errors){
                isValid = false
                break
                }
            return isValid
        },

		   getFormData: function() {
             var comment = '';
             if(this.refs.comment.getDOMNode().value) {
                 comment = this.refs.comment.getDOMNode().value;
                 } 
            var data = {
                 name: this.refs.name.getDOMNode().value,
                 phone: this.refs.phone.getDOMNode().value,
                 comment: comment
                }
                return data;
        },


    render: function(){
        return(
           <div className="form-wrapper">
                <div className="close-button">
                    <a href="#close" onClick={this._handleCloseClick}>Х</a>
                </div>
                <div className="cbf-raw">
                    <h3>Имя</h3>
                </div>
                <div className="cbf-raw">
                    <input ref="name" name="name" type="text"/>
                </div>
                <div className="cbf-raw">
                    <h3>Телефон</h3>
                </div>
                <div className="cbf-raw">
                    <input ref="phone" name="phone" type="phone"/>
                </div>
                <div className="cbf-raw">
                    <h3>Я ищу</h3>
                </div>
                <div className="cbf-raw">
                    <textarea ref="comment" name="comment"></textarea>
                </div>
                <div className="cbf-raw">
                    <button onClick={this._handleSubmit}>Отправить</button>
                </div>
                <input type="hidden" name="id" value={this.props.id} />
           </div>
        );
        
        },

         _handleSubmit: function() {
            event.preventDefault;
            if (this.isValid()) {
              this.setState({submitted: this.getFormData()}, function(){
                FlatServerActionCreators.callBack(this.state.submitted);
                     this.closeForm();
                 })
            } else {
                console.log(this.state.errors);
                }
          },

          _handleCloseClick: function() {
            event.preventDefault;
                     this.closeForm();
              }

    });

 var trim = function() {
              var TRIM_RE = /^\s+|\s+$/g
              return function trim(string) {
                return string.replace(TRIM_RE, '')
              }
            }()

module.exports = CallForm;
