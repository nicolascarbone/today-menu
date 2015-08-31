
/** @jsx React.DOM */
var React         = require('react'),
    Model         = require('../model'),
    Backbone      = require('backbone'),
    Ingredient    = require('./Ingredient'),
    FormComponent = require('./Form'),
    BackboneReact = require('backbone-react-component');


var IngredientsComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  renderIngredient: function( ingredient ) {
    var model = this.getCollection().get(ingredient.id);
    return <Ingredient key={ingredient.id} model={model} />
  },

  addIngredient: function( e ) {

    var col = this.getCollection();
    console.log("addIng", col);

    React.render(<FormComponent collection={col} />, $('#modal-form-container').get(0));
    $('.ui.modal').modal('show');
  },

  render: function() {
    return (
      <div className="recipes-holder">
        <button className="ui olive button" onClick={this.addIngredient}>
          <i className="icon add square"></i>
          <label>Add</label>
        </button>
        <div className="ui list">
          {this.state.collection.map(this.renderIngredient)}
        </div>
      </div>
    )
  }

});

module.exports = IngredientsComponent;