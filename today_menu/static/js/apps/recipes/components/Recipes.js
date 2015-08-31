
/** @jsx React.DOM */
var React         = require('react'),
    Recipe        = require('./Recipe'),
    Backbone      = require('backbone'),
    FormComponent = require('./Form'),
    BackboneReact = require('backbone-react-component');

var IngredientsComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  renderRecipes: function( recipe ) {
    var model = this.getCollection().get(recipe.id);
    return <Recipe key={recipe.id} model={model} />
  },

  addRecipe: function() {
    React.render(<FormComponent />, $('#modal-form-container').get(0));
    $('.ui.dropdown').dropdown();
    $('.ui.modal').modal('show');
  },

  render: function() {
    return (
      <div className="recipes-holder">
        <button className="ui olive button" onClick={this.addRecipe}>
          <i className="icon add square"></i>
          <label>Add</label>
        </button>
        <div className="ui list">
          {this.state.collection.map(this.renderRecipes)}
        </div>
      </div>
    )
  }

});

module.exports = IngredientsComponent;