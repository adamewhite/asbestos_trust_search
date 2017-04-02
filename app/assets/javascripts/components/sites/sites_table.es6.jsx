class SitesTable extends React.Component {
	constructor (props) {
		super(props);
		this.handleSiteChange = this.handleSiteChange.bind(this);
	}

	// handling methods

	handleSiteChange (id, key, value) {
		const paginatedSites = this.props.paginatedSites;
		const updatedSites = paginatedSites.map((site) => {
			if (site.id !== id) {
				return site;
			} else {
				site[key] = value;
				return site;
			}});
		this.props.handleSiteChange(updatedSites);
	}

	// render

  	render () {
	    const siteRows = this.props.paginatedSites.map((site) => {
			  	return (    
			      	<SitesTableRow 
			      		site={site} 
			      		allTrusts={this.props.allTrusts} 
			      		key={site.id} 
			      		handleSiteChange={this.handleSiteChange} 
			      		handleSiteUpdate={this.props.handleSiteUpdate} 
			      		handleSiteDelete={this.props.handleSiteDelete}/> 
			    );
			});
	    return 	(	<tbody>
	    				{siteRows}
	    			</tbody>
	    		);
  }
}

