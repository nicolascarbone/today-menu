/** @jsx React.DOM */
var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var IngredientComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  render: function() {
    return(
      <div className="item">
        <div className="image">
          <img src={this.state.model.image} />
        </div>
        <div className="content">
          <a className="header">{this.state.model.name}</a>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <p>{this.state.model.description}</p>
          </div>
          <div className="extra">
            Additional Details
          </div>
        </div>
      </div>
    );
  }

});

module.exports = IngredientComponent;