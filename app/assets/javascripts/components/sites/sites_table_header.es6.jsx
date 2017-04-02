class SitesTableHeader extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return  <thead>
              <tr>
                <th><a onClick={() => this.props.sortBy('trust_id')}>Trust Name</a></th>
                <th><a onClick={() => this.props.sortBy('name')}>Name</a></th>
                <th><a onClick={() => this.props.sortBy('city')}>City</a></th>
                <th><a onClick={() => this.props.sortBy('state')}>State</a></th>
                <th><a onClick={() => this.props.sortBy('country')}>Country</a></th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
  }
}

