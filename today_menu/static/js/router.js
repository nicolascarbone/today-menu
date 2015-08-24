'use strict';

var Backbone      = require('backbone'),
    SimpleStorage = require('simplestorage.js');

module.exports = Backbone.Router.extend({

  routes: {
    'home': 'home',
    'ingredients': 'ingredients'
  },

  initialize: function() {
    console.log("initialize router");
  },

  selectTab: function( tab ) {
    var active = $('.ui.pointing.menu .item.active'),
    item = $('.ui.pointing.menu .item[href="' + tab + '"]');
    active.removeClass('active');
    item.addClass('active');
  },

  cache: {},

  getView: function( key ) {
    var KeyView = this.cache[key] || undefined;
    console.log("KeyView ", KeyView);
    if ( KeyView === undefined ) {
      var KeyModule = require('./views/ingredients.js'),
          KeyView   = new KeyModule();
      console.log("creating new view")
      this.cache[key] = KeyView;
    }

    return KeyView;
  },

  home: function() {},

  ingredients: function() {
    this.selectTab('#ingredients');
    var View = this.getView('ingredients');
    console.log("VIEW ", View);
    View.render();
  },

});
