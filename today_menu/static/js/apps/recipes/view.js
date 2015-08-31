
var React             = require('react'),
    Backbone          = require('backbone'),
    RecipesComponent  = require('./components/Recipes');


module.exports = Backbone.View.extend({

  initialize: function() {
    var Collection = require('./collection.js');
    this.collection = new Collection();
  },

  render: function() {
    this.collection.fetch({'success': function(col, response) {
      React.render(<RecipesComponent collection={col} />, $('#content').get(0));
    }});
  }

});