
var Backbone   = require('backbone'),
    _          = require('underscore'),
    Collection = require('./collection.js');
    // BackboneReactMixin = require('backbone-react-component'),

    // React = require('react');


var IngredientModel = Backbone.Model.extend({
  idAttribute: 'id',
  url: '/ingredients/save/'
});

module.exports = Backbone.View.extend({

  events: {
    'click #add-element-btn': 'addIngredient'
  },

  addIngredient: function() {
    this.RendererView.renderIngredientsForm( this.model, $('#modal-form-container') );
    $('.ui.modal').modal('show');
  },

  initialize: function() {
    var RendererModule = require('../../utils/renderer.js'),
        self = this;

    this.RendererView = new RendererModule();
    this.collection   = new Collection();
    this.model        = new IngredientModel();

    $('#add-element-btn').on('click', function() {
      self.addIngredient();
    });
  },

  // handleSubmit: function() {},

  render: function() {
    var self = this;
    this.collection.fetch({'success': function(col, response) {
      self.RendererView.renderIngredients( col, $('#menu-container') );
    }});

    setTimeout(function() {
      // var n = {
      //   description: "",
      //   name: "Repollo",
      //   image: "http://wiki.solid-run.com/images/7/75/No_image_available.png",
      //   id: 3
      // };
      // self.collection.add( n );

      // var modelito = _.where(this.collection.models, {name: "Cebolla"});

      var modelito = self.collection.find(function(item){
        console.log("item.get('name') ", item.get('name'));
        return item.get('name') === 'Cebolla';
      });
      console.log("modificado", modelito);
      self.model.set({'name': 'modificado'});
    }, 5000)

  }

});