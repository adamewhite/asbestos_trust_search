class KeywordSearch extends React.Component {
	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.state = {invalid: false};
	}

	// handling methods

	handleChange (e) {
		e.preventDefault();
		this.props.handleSearchObjChange(e.target.name, e.target.value);
	}
	handleSearchSubmit(e) {
		e.preventDefault();
		if (this.props.searchObj.keyword == '') {
			this.setState({invalid: true});
		} else {
			this.setState({invalid: false});
			this.props.handleSearchSubmit();
		}
	}

	// render

  	render () {
	    return (
	        	<div className="input-group search_box shift-right">
			        <input 
			        	type="text"
			        	name="keyword"
			        	className="form-control"
			        	placeholder={this.state.invalid ? 'Please enter keyword.' : ''}
			        	value={this.props.searchObj.keyword}
			        	onChange={this.handleChange}
			        />
			        <span className="input-group-btn">
				        <input 
				        	type="button"
				        	value="Search"
				        	className="btn btn-info"
				        	onClick={this.handleSearchSubmit}
				        />
				        <ResetButton text="Reset" styleClass="btn btn-primary" />
			        </span>
		      	</div>
	    );
  	}
}

KeywordSearch.propTypes = {
  keyword: React.PropTypes.string
};
