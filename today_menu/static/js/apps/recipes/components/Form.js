
var _             = require('underscore'),
    React         = require('react'),
    Backbone      = require('backbone'),
    SearchInput   = require('./SearchInput.js'),
    BackboneReact = require('backbone-react-component');


var RecipeModel            = Backbone.Model.extend({
      url: '/recipes/api/save/'
    }),
    IngredientsRecipeModel = Backbone.Model,
    IngredientsRecipeCol   = Backbone.Collection.extend({
      model: IngredientsRecipeModel
    });

var IngredientRecipe = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  render: function() {
    return(
      <div className="row">
        <div className="twelve wide column">
          <div className='ui category search'>
            <div className='ui icon input'>
              <label>{this.state.model.name}</label>
            </div>
          </div>
        </div>
        <div className="three wide column">
          <label>{this.state.model.quantity}</label>
        </div>
      </div>
    );
  }

});

var IngredientsRecipe = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  renderIngredient: function( recipe ) {
    var model = this.getCollection().get(recipe.id);
    return <IngredientRecipe key={recipe.id} model={model} />
  },

  render: function() {
    return(
      <div className="ui grid column">
        <SearchInput collection={this.getCollection} />
        {this.state.collection.map(this.renderIngredient)}
      </div>
    );
  }

});

module.exports = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  getInitialState: function() {
    return {
      name: '',
      description: '',
      ingredients_col: new IngredientsRecipeCol()
    };
  },

  handleSubmit: function( e ) {
    e.preventDefault();

    var data = {
      'name': this.state.name,
      'description': this.state.description,
      'ingredients': _.map(this.state.ingredients_col.models, function( ingredient ) {
        return {
          'id': ingredient.get('id'),
        }
      })
    };

    var model = new RecipeModel(data);
    model.save();

  },

  handleChange: function( field, e ) {
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  },

  renderIngredients: function( ingredient ) {
    var model = new IngredientsRecipeModel( ingredient );
    //return <IngredientRecipe key={ingredient.id} model={model} />
  },

  render: function() {
    return(
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" onChange={this.handleChange.bind(this, 'name')} />
        </div>
        <div className="field">
          <label>Description</label>
          <input type="text" name="description" placeholder="Last Name" onChange={this.handleChange.bind(this, 'description')} />
        </div>
        <div id="search-fields-container" className="field">
          <div className="field">
            <label>Ingredients</label>
            <div className="ui grid search-input-holder">
              <IngredientsRecipe collection={this.state.ingredients_col} />
            </div>
          </div>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    );
  }

});
