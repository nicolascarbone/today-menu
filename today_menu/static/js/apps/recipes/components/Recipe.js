/** @jsx React.DOM */
var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var RecipeComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  editIngredient: function() {},

  deleteIngredient: function( e ) {
    this.getModel().destroy();
  },

  render: function() {
    return(
      <div className="item">
        <i className="shop icon"></i>
        <div className="content" data-ingredient-id={this.state.model.id}>
          {this.state.model.name}
          <i className="edit icon" onClick={this.editIngredient}></i>
          <i className="minus square icon" onClick={this.deleteIngredient}></i>
        </div>
      </div>
    );
  }

});

module.exports = RecipeComponent;