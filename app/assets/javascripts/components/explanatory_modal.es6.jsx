class ExplanatoryModal extends React.Component {
	constructor (props) {
		super(props);
		this.state = ({showModal: true});
		this.close = this.close.bind(this);
	}
	close () {
		this.setState({showModal: false});
	}
  	render () {
  		const Modal = ReactBootstrap.Modal;
	    return (
		    	<Modal show={this.state.showModal} onHide={this.close}>
		        	<Modal.Body>
		        		<p>This app was built to help those who had worked in industrial sites, were exposed to asbestos, and are now owed compensation.</p>
		        		<p>Most of the manufacturers of asbestos have gone bankrupt and their assets converted to trusts. Those who were exposed in the past and now experience symptoms of that exposure can make claims with the trusts to receive compensation.</p>
		        		<p>Unfortunately, these myriad trusts are managed separately and inconsistently. My aim was to create an app where anyone could search their place of employment and know where to next turn for funds.</p>
		        		<p>Administrative access is available via the log-in below:</p>
		        		<p>Username: aew</p>
		        		<p>Password: test</p>
		        	</Modal.Body>
		        </Modal>
	        	);
	}
}

