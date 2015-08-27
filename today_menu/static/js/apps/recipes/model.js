
var Backbone  = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'id',
  url: '/recipes/api/save/'
});
