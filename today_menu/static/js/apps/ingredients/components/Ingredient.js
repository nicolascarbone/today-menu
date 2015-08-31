/** @jsx React.DOM */
var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var IngredientComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  deleteIngredient: function( e ) {
    this.getModel().destroy();
  },

  render: function() {
    return(
      <div className="item">
        <i className="shop icon"></i>
        <div className="content">
          {this.state.model.name}
          <i className="edit icon"></i>
          <i className="minus square icon" onClick={this.deleteIngredient}></i>
        </div>
      </div>
    );
  }

});

module.exports = IngredientComponent;