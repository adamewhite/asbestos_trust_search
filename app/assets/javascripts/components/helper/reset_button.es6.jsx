class ResetButton extends React.Component {
	constructor (props) {
		super(props);
	}

	// handling methods

	handleOnClick (e) {
		e.preventDefault();
		PubSub.publish('resetButton:onClick');
	}

	// render

  	render () {
    	return <a href="#" className={this.props.styleClass} onClick={this.handleOnClick.bind(this)}>{this.props.text}</a>;
  	}
}