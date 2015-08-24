
var React = require('react');

var FormComponent = React.createBackboneClass({

  render: function() {
    return(
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          <label>Description</label>
          <input type="text" name="description" placeholder="Last Name" />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    );
  }

});

module.exports = FormComponent;
