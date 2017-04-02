class PaginationPanel extends React.Component {
	constructor (props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {activePage: 1};
	}

	// component lifecycle methods

	componentDidMount () {
		this.setState({activePage: this.props.currentPage || 1})
	}

	// handling methods

	handleSelect(eventKey) {
    	this.setState({activePage: eventKey}, () => this.props.handlePaginate(this.state.activePage));
  	}

  	// render

  	render () {
  		const Pagination = ReactBootstrap.Pagination;
	  	const totalPages = this.props.totalPages;
		return (
			<Pagination
				prev
				next
				ellipsis
				boundaryLinks
				maxButtons={10}
	          	bsSize="medium"
	          	items={totalPages}
	          	activePage={this.state.activePage}
	          	onSelect={this.handleSelect} />
		);
	}
}