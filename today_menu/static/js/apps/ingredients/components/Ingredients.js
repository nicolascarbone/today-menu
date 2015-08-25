/** @jsx React.DOM */
var React         = require('react'),
    Ingredient    = require('./Ingredient.js'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var IngredientsComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  renderIngredient: function( ingredient ) {
    var model = new Backbone.Model(ingredient);
    return <Ingredient key={ingredient.id} model={model} />
  },

  render: function() {
    return <div className="ui items">{this.state.collection.map(this.renderIngredient)}</div>
  }

});

module.exports = IngredientsComponent;