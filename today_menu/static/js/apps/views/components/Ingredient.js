/** @jsx React.DOM */
var React         = require('react'),
    ReactBackbone = require('react.backbone');

var IngredientComponent = React.createBackboneClass({

  render: function() {
    return(
      <div className="item">
        <div className="image">
          <img src={this.props.ingredient.image} />
        </div>
        <div className="content">
          <a className="header">{this.props.ingredient.name}</a>
          <div className="meta">
            <span>Description</span>
          </div>
          <div className="description">
            <p>{this.props.ingredient.description}</p>
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