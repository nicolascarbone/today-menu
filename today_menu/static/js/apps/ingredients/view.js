
var Backbone   = require('backbone'),
    Collection = require('./collection.js');

module.exports = Backbone.View.extend({

  events: {
    'click #add-element-btn': 'addIngredient'
  },

  addIngredient: function() {
    this.RendererView.renderIngredientsForm( $('#modal-form-container') );
    $('.ui.modal').modal('show');
  },

  initialize: function() {
    var RendererModule = require('../../utils/renderer.js');
    this.RendererView  = new RendererModule();
    this.collection    = new Collection().fetch({async: false});

    var self = this;
    $('#add-element-btn').on('click', function() {
      self.addIngredient();
    });
  },

  render: function() {
    var ingredients = this.collection.responseJSON;
    this.RendererView.renderIngredients( ingredients, $('#menu-container') );
  }

});