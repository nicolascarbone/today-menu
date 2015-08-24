/** @jsx React.DOM */
var React      = require('react'),
    Ingredient = require('./Ingredient.js');

var IngredientsComponent = React.createClass({

  render: function() {
    return (
      <div className="ui items">
        {
          this.props.ingredients.map(function( ingredient ) {
            return <Ingredient key={ingredient.id} model={ingredient} />
          })
        }
      </div>
    );

  }

});

module.exports = IngredientsComponent;