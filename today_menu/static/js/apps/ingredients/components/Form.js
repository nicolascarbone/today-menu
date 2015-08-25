
var React = require('react');

var FormComponent = React.createClass({

  handleSubmit: function( e ) {
    console.log(e);
    e.preventDefault();
    console.log("handle submit", this.state);
  },

  handleChange: function( field, e ) {
    this.setState[field] = {
      field: e.target.value
    };
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
