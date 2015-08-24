
'use strict';

var $         = require('jquery'),
    Backbone  = require('backbone'),
    Router    = require('./router'),
    router    = new Router();

Backbone.$ = $;
Backbone.history.start();
