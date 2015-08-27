
var _                = require('underscore'),
    React            = require('react');
    Model            = require('./model.js'),
    Backbone         = require('backbone'),
    Collection       = require('./collection.js'),
    FormComponent    = require('./components/Form'),
    RecipesComponent = require('./components/Recipes');


module.exports = Backbone.View.extend({

  el: '.recipes',

  events: {
    'click #add-element-btn': 'addRecipe',
  },

  initialize: function() {
    var self = this;
    this.collection = new Collection();
    $('#add-element-btn').on('click', function() {
      self.addRecipe();
    });
  },

  addRecipeSearch: function() {

    console.log("multiple", $('#multiple-search'));
    $('#modal-form-container').append($('#multiple-search'));

    $('.ui.dropdown').dropdown({
      maxSelections: 1
    });

  },

  addRecipe: function() {
    var model = new Model();
    $('#modal-form-container').html($('#recipes-form'));

    this.addRecipeSearch();

    var self = this;
    setTimeout(function() {
      console.log("this ");
      self.addRecipeSearch();
    }, 5000);
    $('.ui.modal').modal('show');
    //React.render(<FormComponent collection={this.collection} model={model} />, $('#modal-form-container').get(0));
  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      React.render(<RecipesComponent collection={col}/>, $('#menu-container').get(0));
    }});
  }

});