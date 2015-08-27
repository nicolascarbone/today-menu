/** @jsx React.DOM */
var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var RecipeComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  render: function() {
    return(
      <div className="item">
        <i className="shop icon"></i>
        <div className="content">
          {this.state.model.name}
        </div>
      </div>
    );
  }

});

module.exports = RecipeComponent;