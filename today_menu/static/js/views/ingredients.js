
var $          = require('jquery'),
    Backbone   = require('backbone'),
    Collection = require('../collections/ingredients.js');

module.exports = Backbone.View.extend({

    initialize: function() {
      var RendererModule = require('../utils/renderer.js');
      this.RendererView  = new RendererModule();
      this.collection    = new Collection();
    },

    render: function() {
      var self = this;
      this.collection.fetch({
        'success': function(response, col) {
          self.RendererView.renderIngredients( col, $('#menu-container') );
        }
      });

    }

});