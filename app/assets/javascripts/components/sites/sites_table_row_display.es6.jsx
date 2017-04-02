class SitesTableRowDisplay extends React.Component {
	constructor (props) {
		super(props);
		this.state = {showModal: false};
		this.handleSiteDelete = this.handleSiteDelete.bind(this);
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	// handling methods 

	handleSiteDelete () {
		this.props.handleSiteDelete(this.props.site.id);
	}

	// helper methods

	open () {
		this.setState({showModal: true});
	}
	close () {
		this.setState({showModal: false});
	}
  	determineColor (trustId) {
  		const colorArray = ["mint-cream", "azure", "alice-blue", "lavender", "misty-rose", "lavender-blush", "honeydew", "light-yellow"];
	    const colorId = trustId % 8;
	    const color = colorArray[colorId];
    	return color;
  	}
	findTrustName (trustId) {
	    const trustName = this.props.allTrusts.filter((t) => {return t.id == trustId}).pop().name;
	    return trustName;
	}

	// render

    render () {
        const Glyphicon = ReactBootstrap.Glyphicon;
        const Modal = ReactBootstrap.Modal;
        return (
	            <tr className={this.determineColor(this.props.site.trust_id)}>
	           		<td className="col-sm-2">{this.findTrustName(this.props.site.trust_id)}</td>
	              	<td className="col-sm-2">{this.props.toTitleCase(this.props.site.name)}</td>
	             	<td className="col-sm-2">{this.props.toTitleCase(this.props.site.city)}</td>
	             	<td className="col-sm-1">{this.props.site.state}</td>
	             	<td className="col-sm-1">{this.props.toTitleCase(this.props.site.country)}</td>
	              	<td className="col-sm-1">{this.props.site.start_date}</td>
	              	<td className="col-sm-1">{this.props.site.end_date}</td>
	              	<td className="col-sm-2">
		                <a className="btn" onClick={this.props.toggleEdit}><Glyphicon glyph="pencil"></Glyphicon></a>
		                <a className="btn" onClick={this.open}><Glyphicon glyph="trash"></Glyphicon></a>
		               	<Modal show={this.state.showModal} onHide={this.close}>
			                <Modal.Header closeButton>
			            		<Modal.Title>Are you sure you want to delete this site?</Modal.Title>
			          		</Modal.Header>
			            	<Modal.Body>
			            		<a className="btn" onClick={this.handleSiteDelete}>Yes</a>
			            		<a className="btn" onClick={this.close}>Cancel</a>
			            	</Modal.Body>
			            </Modal>
	              	</td>
	            </tr>


           ); 
  	}
}

