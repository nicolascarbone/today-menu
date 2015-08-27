
var Backbone  = require('backbone'),
    Model     = require('./model.js');

// console.log("model", new Model());

module.exports = Backbone.Collection.extend({
    url: '/recipes/api/all/',
    model: Model
});