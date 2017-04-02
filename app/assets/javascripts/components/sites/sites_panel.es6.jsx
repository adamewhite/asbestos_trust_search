class SitesPanel extends React.Component {
	constructor (props) {
		super(props);
		this.state = {open: false};
	}
  	render () {
  		const Table = ReactBootstrap.Table;
  		const Button = ReactBootstrap.Button;
  		const Panel = ReactBootstrap.Panel;
	    return 	(<div className="col-sm-12 panel-padding">
		    		<Button className="button collapse-button" onClick={()=> this.setState({open: !this.state.open})}>{this.state.open === true ? 'Hide Site Results' : 'See Site Results'}</Button>
		    		<Panel collapsible expanded={this.state.open}>
		    			<PaginationPanel 
		    				totalPages={this.props.metaObj.total_pages} 
		    				currentPage={this.props.metaObj.current_page} 
		    				handlePaginate={this.props.handlePaginate}
		    			/>
			    		<Table condensed bordered responsive>
							<SitesTableHeader 
								paginatedSites={this.props.paginatedSites} 
								handleSort={this.props.handleSort}
								reverseOrder={this.props.reverseOrder}
								sortBy={this.props.sortBy}
							/>
							<SitesTable 
								paginatedSites={this.props.paginatedSites} 
								allTrusts={this.props.allTrusts} 
								handleSiteChange={this.props.handleSiteChange}
								handleSiteUpdate={this.props.handleSiteUpdate}
								handleSiteDelete={this.props.handleSiteDelete}
							/>
						</Table>
					</Panel>
				</div>);
  }
}

