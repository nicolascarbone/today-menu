
var Backbone  = require('backbone'),
    Model     = require('./model.js');


module.exports = Backbone.Collection.extend({
    url: '/ingredients/api/all/',
    model: Model,
});