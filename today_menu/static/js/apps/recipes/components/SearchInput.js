var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

module.exports = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  getInitialState: function() {
    return {
      'id': '',
      'name': '',
      'quantity': ''
    }
  },

  componentDidMount: function() {

    $('.ui.search').search({
       apiSettings: {
        url: '/ingredients/api/search/?q={query}',
        searchFields: [
          'title'
        ]
      },
      onSelect: this.selectedIngredient,
    });

  },

  selectedIngredient: function(selected, b) {
    var state = {
      'id': selected.id,
      'name': selected.title
    }
    this.setState(state);
  },

  handleChange: function( field, e ) {
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  },

  addIngredient: function( e ) {
    console.log("add this ingredient ", this.state );
    console.log(this.getCollection().add(this.state));
    //this.state.
  },

  render: function() {
    return (
      <div className="row">
        <div className="twelve wide column">
          <div className='ui category search'>
            <div className='ui icon input'>
              <input className='prompt' type='text' name='ingredient[]' placeholder='Search ingredients...' onChange={this.handleChange.bind(this, 'name')} />
              <i className='search icon'></i>
            </div>
          </div>
        </div>
        <div className="three wide column">
          <input type="text" name="quantity[]" onChange={this.handleChange.bind(this, 'quantity')} />
        </div>
        <div className="one wide column">
          <i className='check circle outline icon' onClick={this.addIngredient}></i>
        </div>
      </div>
    )
  }

});

