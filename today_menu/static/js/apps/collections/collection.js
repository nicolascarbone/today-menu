
var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({
    url: '/ingredients/api/all/',
    // localStorage: new Backbone.LocalStorage("todos-backbone"),
});