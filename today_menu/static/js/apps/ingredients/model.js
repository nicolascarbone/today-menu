
var Backbone  = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: '/ingredients/api/save/'
});
