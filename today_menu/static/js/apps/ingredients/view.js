
var _             = require('underscore'),
    React         = require('react');
    Model         = require('./model.js'),
    Backbone      = require('backbone'),
    Collection    = require('./collection.js'),
    IngsComponent = require('./components/Ingredients'),
    FormComponent = require('./components/Form');


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
    var model = new Model();
    React.render(<FormComponent collection={this.collection} model={model} />, $('#modal-form-container').get(0));
    $('.ui.modal').modal('show');
  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      React.render(<IngsComponent collection={col}/>, $('#menu-container').get(0));
    }});
  }

});