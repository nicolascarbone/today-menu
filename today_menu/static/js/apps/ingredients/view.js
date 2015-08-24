
var Backbone   = require('backbone'),
    Collection = require('./collection.js'),
    BackboneReactMixin = require('backbone-react-component'),
    React = require('react');

module.exports = Backbone.View.extend({

  events: {
    'click #add-element-btn': 'addIngredient'
  },

  addIngredient: function() {
    this.RendererView.renderIngredientsForm( $('#modal-form-container') );
    $('.ui.modal').modal('show');
  },

  initialize: function() {
    var RendererModule = require('../../utils/renderer.js'),
        self = this;

    this.RendererView  = new RendererModule();
    this.collection    = new Collection();

    $('#add-element-btn').on('click', function() {
      self.addIngredient();
    });
  },

  render: function() {
    var self = this;
    this.collection.fetch({'success': function(col, response) {
      self.RendererView.renderIngredients( col, $('#menu-container') );
    }});

    setTimeout(function() {
      var n = {
        description: "",
        name: "Repollo",
        image: "http://wiki.solid-run.com/images/7/75/No_image_available.png",
        id: 3
      }
      self.collection.add( n );
    }, 5000)

  }

});