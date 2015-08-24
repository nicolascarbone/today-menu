'use strict';

var $        = require('jquery'),
    Backbone = require('backbone');

module.exports = Backbone.Router.extend({

  routes: {
    'home': 'home',
    'ingredients': 'ingredients'
  },

  home: function() {
    // var HomeModule = require('./views/home.js'),
    //     HomeView   = new HomeModule();
    // HomeView.render();
  },

  selectTab: function( tab ) {
    var active = $('.ui.pointing.menu .item.active'),
    item = $('.ui.pointing.menu .item[href="' + tab + '"]');
    active.removeClass('active');
    item.addClass('active');
  },

  ingredients: function() {
    this.selectTab('#ingredients');
    var IngredientsModule = require('./views/ingredients.js'),
        IngredientsView   = new IngredientsModule();

    IngredientsView.render();
  },

});
