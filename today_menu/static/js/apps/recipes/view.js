
var _                 = require('underscore'),
    React             = require('react');
    Model             = require('./model.js'),
    Backbone          = require('backbone'),
    Collection        = require('./collection.js'),
    FormComponent     = require('./components/Form'),
    RecipesComponent  = require('./components/Recipes'),
    IngredientsModule = require('../ingredients/view.js');


module.exports = Backbone.View.extend({

  el: '.recipes',

  events: {
    'click #add-element-btn': 'addRecipe',
  },

  initialize: function() {

    this.collection = new Collection();

    var self = this;
    $('#add-element-btn').on('click', function() {
      self.addRecipe();
    });

    var ingsView = new IngredientsModule();
    this.ingredients = ingsView.getIngredientsForSearch();

  },

  addIngredientSearch: function() {

    var field = "<div class='field'><label>Ingredients</label>";
    field += "<div class='ui category search'>";
    field += "<div class='ui icon input'>";
    field += "<input class='prompt' type='text' name='ingredient[]' placeholder='Search ingredients...'>";
    field += "<i class='search icon'></i>";
    field += "</div><div class='results'></div></div></div>";

    var $field = $( field );

    var recipeForm = $('#modal-form-container form');

    console.log( field );
    console.log(recipeForm.find('#search-fields-container'));
    recipeForm.find('#search-fields-container').append( field );

    //console.log(this.ingredients);

    $field.find('.ui.search').search({
      source: this.ingredients
    });

  },

  addRecipe: function() {

    $('#modal-form-container').html( $('#recipes-form') );

    this.addIngredientSearch();

    $('.ui.modal').modal('show');

    var self = this;
    setTimeout(function() {
      self.addIngredientSearch();
    }, 5000);

    // var model = new Model(),
    //React.render(<FormComponent collection={this.collection} model={model} />, $('#modal-form-container').get(0));

  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      React.render(<RecipesComponent collection={col}/>, $('#menu-container').get(0));
    }});
  }

});