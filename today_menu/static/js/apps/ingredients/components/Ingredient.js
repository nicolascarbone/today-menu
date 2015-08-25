/** @jsx React.DOM */
var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var IngredientComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  handleRemove: function( e ) {
    var id = e.target.parentNode.getAttribute('data-id');
    this.getCollection().get(id).destroy();
  },

  render: function() {
    return(
      <div className="item">
        <i className="shop icon"></i>
        <div className="content" data-id={this.state.model.id}>
          {this.state.model.name}
          <i className="edit icon"></i>
          <i className="remove icon" onClick={this.handleRemove}></i>
        </div>
      </div>
    );
  }

});

module.exports = IngredientComponent;