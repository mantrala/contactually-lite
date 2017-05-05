var ContactList = React.createClass({
  getInitialState() {
    return { contacts: this.props.contacts }
  },

  displayContacts: function() {
    return this.state.contacts.map(function(item) {
      return (
        <Contact key={item.id} data={item} />
      )
    });
  },

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            { this.displayContacts() }
          </tbody>
        </table>
      </div>
    )
  }
});