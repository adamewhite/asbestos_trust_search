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
		        		<p>Administrative access is available via the log-in below:</p>
		        		<p>Username: aew</p>
		        		<p>Password: test</p>
		        	</Modal.Body>
		        </Modal>
	        	);
	}
}

