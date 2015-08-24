
var $        = require('jquery'),
    React    = require('react'),
    Backbone = require('backbone');

module.exports = Backbone.View.extend({

  render: function() {
    console.log("render!!!!");
  },

  // renderIngredient: function( container ) {
  //   var IngredientComponent = require('../apps/ingredients/components/Ingredient');
  //   React.render(<IngredientComponent />, container.get(0));
  // },

  renderIngredients: function( ingredients, container ) {
    var IngredientsComponent = require('../apps/ingredients/components/Ingredients');
    React.render(<IngredientsComponent ingredients={ingredients}/>, container.get(0));
  },

  renderIngredientsForm: function( container ) {
    var FormComponent = require('../apps/ingredients/components/Form');
    React.render(<FormComponent />, container.get(0));
  }

});
