
var _                 = require('underscore'),
    React             = require('react');
    Model             = require('./model.js'),
    Backbone          = require('backbone'),
    RecipesComponent  = require('./components/Recipes');


module.exports = Backbone.View.extend({

  el: '#recipes-container',

  initialize: function() {

    var Collection = require('./collection.js');
    this.collection = new Collection();

  },

  render: function() {

    this.collection.fetch({'success': function(col, response) {
      React.render(<RecipesComponent collection={col} />, $('#recipes-container').get(0));
    }});
  }

});