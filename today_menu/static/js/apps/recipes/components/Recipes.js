/** @jsx React.DOM */
var React         = require('react'),
    Recipe        = require('./Recipe.js'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var IngredientsComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  renderRecipes: function( recipe ) {
    var model = this.getCollection().get(recipe.id);
    return <Recipe key={recipe.id} model={model} />
  },

  render: function() {
    return <div className="ui list">{this.state.collection.map(this.renderRecipes)}</div>
  }

});

module.exports = IngredientsComponent;