class SitesTableRowForm extends React.Component {
	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleTrustChange = this.handleTrustChange.bind(this);
		this.handleSiteUpdate = this.handleSiteUpdate.bind(this);
	}

	// handling methods 

	handleChange (e) {
		e.preventDefault();
		this.props.handleSiteChange(this.props.site.id, e.target.name, e.target.value);
	}
	handleTrustChange (site_id, name, trust_id) {
		this.props.handleSiteChange(this.props.site.id, name, trust_id);
	}
	handleSiteUpdate () {
		this.props.handleSiteUpdate(this.props.site.id);
	}

	// render

  	render () {
  		const Glyphicon = ReactBootstrap.Glyphicon;
	    return (
	        <tr>
	        	 <td className="col-sm-2">
	                <TrustSelector 
	            		name="trust" 
	            		classes="form-control"
	            		site_id={this.props.site.id}
	            		trust_id={this.props.site.trust_id}
	            		allTrusts={this.props.allTrusts}
	            		handleChange={this.handleTrustChange}
	            	/>
	            </td>  
	            <td className="col-sm-2">
	              	<input
	               	type="text"
	               	className="form-control"
	                name="name"
	                value={this.props.toTitleCase(this.props.site.name)}
	                onChange={this.handleChange} />
	            </td>
	            <td className="col-sm-2">
	              	<input
	              	type="text"
	              	className="form-control"
	                name="city"
	                value={this.props.toTitleCase(this.props.site.city)}
	                onChange={this.handleChange} />
	            </td>
	            <td className="col-sm-1">
	            	<StateSelector
	            		classes="form-control"
	            		name="state"
                        data={this.props.site.state}
                        handleChange={this.handleChange}
	            	/>
	            </td>
	            <td className="col-sm-1">
	            	<CountrySelector
	            		classes="form-control"
	            		name="country"
                        data={this.props.site.country}
                        handleChange={this.handleChange}
	            	/>
	            </td>
	            <td className="col-sm-1">
	              	<input
	             	type="text"
	             	className="form-control"
	              	name="start_date"
	              	value={this.props.site.start_date}
	              	onChange={this.handleChange} />
	            </td>
	            <td className="col-sm-1">
	              	<input
	               	type="text"
	               	className="form-control"
	                name="end_date"
	                value={this.props.site.end_date}
	                onChange={this.handleChange} />
	            </td>          
	            <td className="col-sm-2">
		            <a className="btn" onClick={this.handleSiteUpdate}><Glyphicon glyph="ok"></Glyphicon></a>
		            <a className="btn" onClick={this.props.toggleEdit}><Glyphicon glyph="backward"></Glyphicon></a>
	            </td>
	        </tr>
	    );
	}
}

