class TrustPanel extends React.Component {
	constructor (props) {
		super(props);
	}
  render () {
    const Panel = ReactBootstrap.Panel;
    const trustHeader = (  <h1>Trusts</h1> );

    const eligibleTrustIds = this.props.eligibleTrusts.map((t) => t.id).sort((a,b) => a - b);
  	const trustList = this.props.allTrusts.map((trust) => {
  		return (<li className={eligibleTrustIds.indexOf(trust.id) !== -1 ? '' : 'faded'} key={trust.id}>{trust.name}</li>)
  	});
    const firstHalf = trustList.slice(0, 10);
    const secondHalf = trustList.slice(11, 21);

    return (
        <div className="col-sm-12 panel-padding">
          <Panel bsStyle="info" header={trustHeader}>
          	<ul className="col-sm-6">
          		{firstHalf}
          	</ul>
            <ul className="col-sm-6">
              {secondHalf}
            </ul>
          </Panel>
        </div>
    );
  }
}

TrustPanel.propTypes = {
  trust: React.PropTypes.string
};