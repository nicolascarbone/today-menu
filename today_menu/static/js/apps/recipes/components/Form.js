
var React         = require('react'),
    Backbone      = require('backbone'),
    BackboneReact = require('backbone-react-component');

var FormComponent = React.createClass({

  mixins: [Backbone.React.Component.mixin],

  getInitialState: function() {
    return {
      name: '',
      description: ''
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
        <button className="ui button" type="submit">Submit</button>
      </form>
    );
  }

});

module.exports = FormComponent;
