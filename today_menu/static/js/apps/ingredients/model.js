
var Backbone  = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'id',
  url: '/ingredients/save/'
});
