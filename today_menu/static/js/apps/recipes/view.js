
var _          = require('underscore'),
    Backbone   = require('backbone'),
    Collection = require('./collection.js'),
    React      = require('react');

var IngredientModel = Backbone.Model.extend({
  idAttribute: 'id',
  url: '/ingredients/save/'
});

module.exports = Backbone.View.extend({

  //el: '#menu-container',

  events: {
    'click #add-element-btn': 'addIngredient'
  },

  addIngredient: function() {
    var FormComponent = require('./components/Form'),
        model = new IngredientModel();

    React.render(<FormComponent collection={this.collection} model={model} />, $('#modal-form-container').get(0));
    $('.ui.modal').modal('show');
  },

  initialize: function() {
    var self = this;
    this.collection = new Collection();
    $('#add-element-btn').on('click', function() {
      self.addIngredient();
    });
  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      var IngredientsComponent = require('./components/Ingredients');
      React.render(<IngredientsComponent collection={col}/>, $('#menu-container').get(0));
    }});
  }

});