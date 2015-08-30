
var _             = require('underscore'),
    React         = require('react');
    Model         = require('./model.js'),
    Backbone      = require('backbone'),
    IngsComponent = require('./components/Ingredients'),
    FormComponent = require('./components/Form');


module.exports = Backbone.View.extend({

  el: '.ingredients',

  events: {
    'click #add-element-btn': 'addIngredient',
  },

  initialize: function() {

    var self = this,
        Collection = require('./collection.js');

    this.collection = new Collection();
    $('#add-element-btn').on('click', function() {
      self.addIngredient();
    });
  },

  getIngredientsForSearch: function() {
    var content;
    this.collection.fetch({'async': false, 'success': function(col, response) {
      content = _.map(col.models, function( model ) {
        return {'title': model.get('name')}
      });
    }})
    return content;
  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      React.render(<IngsComponent collection={col}/>, $('#menu-container').get(0));
    }});
  }

});