class TrustSelector extends React.Component {
	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		// this.state = {
		// 	trust_id: ''
		// }
	}
	componentDidMount () {
		// const trust = this.props.trusts;
	}
	handleChange (e) {
		e.preventDefault();
		// const site_id = this.props.site_id;
		// const trust_id = e.target.value;
		this.props.handleChange(this.props.site_id, "trust_id", e.target.value);
	}
  	render () {
	  	const trust_list = this.props.allTrusts.map((t) => <option key={t.id} value={t.id}>{t.name}</option>); 

	    return 	<select className={this.props.classes} name="trust_list" value={this.props.trust_id} onChange={this.handleChange}>
	    			{trust_list}
	    		</select>;
  	}
}

