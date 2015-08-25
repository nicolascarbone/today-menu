
var Backbone  = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: 'id',
  urlRoot: '/ingredients/api/save/',
  url: function() {
    return this.urlRoot + '?id=' + this.id;
  }
});
