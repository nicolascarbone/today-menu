
'use strict';

var Backbone  = require('backbone'),
    Router    = require('./router');

Backbone.$ = $;

Backbone.emulateJSON = true;

$( document ).ready(function() {
    var router = new Router();
    Backbone.history.start();

    var oldSync = Backbone.sync;
    Backbone.sync = function(method, model, options){
      options.beforeSend = function(xhr){
        xhr.setRequestHeader('X-CSRFToken', $('[name=csrfmiddlewaretoken]').val());
      };
      return oldSync(method, model, options);
    };

});
