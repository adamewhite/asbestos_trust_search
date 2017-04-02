class SearchPanel extends React.Component {
  render () {
  	const Tabs = ReactBootstrap.Tabs;
    const Tab = ReactBootstrap.Tab;
    return (
       <div className="row">
          <div className="col-sm-12 search-panel-padding">
            <Tabs className="tabs" defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} className="tab" title="Advanced Search">
                <AdvancedSearch 
                  searchObj={this.props.searchObj} 
                  handleSearchObjChange={this.props.handleSearchObjChange}
                  handleDateChange={this.props.handleDateChange}
                  handleSearchSubmit={this.props.handleSearchSubmit}
                />
              </Tab>
              <Tab eventKey={2} className="tab" title="Keyword Search">
                <KeywordSearch 
                  searchObj={this.props.searchObj} 
                  handleSearchObjChange={this.props.handleSearchObjChange} 
                  handleSearchSubmit={this.props.handleSearchSubmit}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      );      
  }
}