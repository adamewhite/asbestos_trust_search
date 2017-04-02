class AdvancedSearch extends React.Component {
	constructor (props) {
		super(props);
        this.state = {invalid: false}
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

    // handling methods

    handleChange (e) {
        e.preventDefault();
        this.props.handleSearchObjChange(e.target.name, e.target.value);
    }
    handleSearchSubmit(e) {
        e.preventDefault();
        if (this.props.searchObj.name == '' 
            && this.props.searchObj.city == '' 
            && this.props.searchObj.state == '' 
            && this.props.searchObj.country == '' 
            && this.props.searchObj.date_from.month == ''
            && this.props.searchObj.date_from.day == ''
            && this.props.searchObj.date_from.year == ''
            && this.props.searchObj.date_to.month == ''
            && this.props.searchObj.date_to.day == ''
            && this.props.searchObj.date_to.year == '') {
            this.setState({invalid: true});
        } else {
            this.setState({invalid: false});
            this.props.handleSearchSubmit();
        }
    }

    // render

	render () {
		return  <div class="panel panel-body">
                    <form className="form-group search_box" onSubmit={this.handleSearchSubmit}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="input-group panel search-box-padding">
                                    <span className="input-group-addon">Name</span>
                        			<input 
                        				type="text"
                        				name="name"
                                        className="form-control"
                                        value={this.props.searchObj.name}
                                        placeholder={this.state.invalid ? 'Please enter name.' : ''}
                                        onChange={this.handleChange}
                        			/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="input-group panel search-box-padding">
                                    <span className="input-group-addon">City</span>
                                    <input 
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        value={this.props.searchObj.city}
                                        placeholder={this.state.invalid ? 'Please enter city.' : ''}
                                        onChange={this.handleChange} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="col-sm-6 search-box-padding">
                                    <div className="input-group panel">
                                        <span className="input-group-addon">State</span>
                                        <StateSelector
                                            classes="form-control"
                                            data={this.props.searchObj.state}
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6 search-box-padding">
                                    <div className="input-group panel">
                                        <span className="input-group-addon">Country</span>
                                        <CountrySelector 
                                            classes="form-control"
                                            data={this.props.searchObj.country}
                                            handleChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <DateSelector 
                                    className="form-control" 
                                    classes="search-box-padding"
                                    name="date_from" 
                                    title="Start Date"
                                    date={this.props.searchObj.date_from}
                                    handleDateChange={this.props.handleDateChange}
                                />
                                <DateSelector 
                                    className="form-control" 
                                    classes="search-box-padding"
                                    name="date_to" 
                                    title="End Date"
                                    date={this.props.searchObj.date_to}
                                    handleDateChange={this.props.handleDateChange}
                                />
                            </div>
                        </div>
                        
                        <div className="shift-right">
                            <span className="input-group-btn advanced-search-buttons">
                    			<input 
                    				type="submit"
                                    className="btn btn-info advanced-search-button"
                    				value="Search"
                    			/> 
                                <ResetButton text="Reset" styleClass="btn btn-primary reset-button" />
                            </span>  
                        </div> 			
            		</form>
                </div>;
	}
}

