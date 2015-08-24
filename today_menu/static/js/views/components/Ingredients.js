/** @jsx React.DOM */
var React         = require('react'),
    Ingredient    = require('./Ingredient.js'),
    ReactBackbone = require('react.backbone');

var IngredientsComponent = React.createClass({

  render: function() {
    return (
      <div className="ui items">
        {
          this.props.ingredients.map(function( ingredient ) {
            return <Ingredient key={ingredient.id} ingredient={ingredient} />
          })
        }
      </div>
    );

  }

});

module.exports = IngredientsComponent;