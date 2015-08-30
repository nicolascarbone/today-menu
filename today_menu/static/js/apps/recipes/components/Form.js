
var React         = require('react'),
    Backbone      = require('backbone'),
    SearchInput   = require('./SearchInput.js'),
    BackboneReact = require('backbone-react-component');


var IngredientsRecipeModel = Backbone.Model;
var IngredientsRecipeCol = Backbone.Collection.extend({
  model: IngredientsRecipeModel
});

var IngredientRecipe = React.createClass({

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

var IngredientsRecipe = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  renderIngredient: function( recipe ) {
    var model = this.getCollection().get(recipe.id);
    return <IngredientRecipe key={recipe.id} model={model} />
  },

  render: function() {
    console.log("this.state.collection22222 ", this.getCollection());
    return(
      <div className="ui grid">
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
    this.getCollection().create(this.state);
    $('.ui.modal').modal('hide');
  },

  handleChange: function( field, e ) {
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  },

  addSearchInput: function( e ) {
    e.preventDefault();
    console.log("add search input");
  },

  renderIngredients: function( ingredient ) {
    console.log("ingredient ", ingredient);
    var model = new IngredientsRecipeModel( ingredient );
    //return <IngredientRecipe key={ingredient.id} model={model} />
  },

  render: function() {
    console.log("this.state.ingredients_col ", this.state.ingredients_col);
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
            <button className="ui olive button add-ingredient-btn" onClick={this.addSearchInput}>
              <i className="icon add square"></i>
              Add Another
            </button>
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
