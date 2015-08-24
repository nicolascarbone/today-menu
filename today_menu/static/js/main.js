
'use strict';

var Backbone  = require('backbone'),
    Router    = require('./router');

Backbone.$ = $;
// Backbone.LocalStorage = require("backbone.localstorage");

$( document ).ready(function() {
    var router = new Router();
    Backbone.history.start();
});
