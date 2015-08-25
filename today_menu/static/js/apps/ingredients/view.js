
var _          = require('underscore'),
    Backbone   = require('backbone'),
    Collection = require('./collection.js'),
    Model      = require('./model.js'),
    React      = require('react');

module.exports = Backbone.View.extend({

  el: '.ingredients',

  events: {
    'click #add-element-btn': 'addIngredient',
  },

  initialize: function() {
    var self = this;
    this.collection = new Collection();
    $('#add-element-btn').on('click', function() {
      self.addIngredient();
    });
  },

  addIngredient: function() {
    var FormComponent = require('./components/Form'),
        model = new Model();

    React.render(<FormComponent collection={this.collection} model={model} />, $('#modal-form-container').get(0));
    $('.ui.modal').modal('show');
  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      var IngredientsComponent = require('./components/Ingredients');
      React.render(<IngredientsComponent collection={col}/>, $('#menu-container').get(0));
    }});
  }

});