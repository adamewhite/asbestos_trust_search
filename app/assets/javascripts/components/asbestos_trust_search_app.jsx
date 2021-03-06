class AsbestosTrustSearchApp extends React.Component {
	constructor (props) {
		super(props);
		this.state = {	searchObj: {keyword: '', 
									name: '', 
									city: '', 
									state: '', 
									country: '', 
									date_from: 	{month: '',
												day: '',
												year: ''
												}, 
									date_to: 	{month: '',
												day: '',
												year: ''
												}, 
									},
						page: 1,
						sortCriterion: '',
						reverseOrder: false,
						visible: false,
						paginatedSites: [],
						eligibleTrusts: [],
						meta: 	{total_pages: 0, 
								current_page: 1, 
								total_count: 0}
						};
		
		this.fetchSites = this.fetchSites.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handlePaginate = this.handlePaginate.bind(this);
		this.handleSearchObjChange = this.handleSearchObjChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleSiteChange = this.handleSiteChange.bind(this);
		this.handleSiteUpdate = this.handleSiteUpdate.bind(this);
		this.handleSiteDelete = this.handleSiteDelete.bind(this);
		this.sortBy = this.sortBy.bind(this);
		
	}

	// component lifecycle methods

	componentDidMount () {
		this.subscribeToEvents();
	}
	componentWillUnmount () {
		this.unsubscribeToEvents();

	}

	// fetch sites

	fetchSites () { 
		const fetchData = {
          page: this.state.page,
          keyword: this.state.searchObj.keyword,
          name: this.state.searchObj.name,
          city: this.state.searchObj.city,
          state: this.state.searchObj.state,
          country: this.state.searchObj.country,
          date_from: this.provideDefaultDate(this.state.searchObj.date_from, 'date_from'),
          date_to: this.provideDefaultDate(this.state.searchObj.date_to, 'date_to'),
          sortCriterion: this.state.sortCriterion,
          reverseOrder: this.state.reverseOrder
   		};	
	    $.ajax({
	      method: 'GET',
	      url: '/sites/',
	      dataType: 'JSON',
	      data: fetchData,
	    }).done((data, textStatus, jqXHR) => {
	      this.setState({	paginatedSites: data.paginatedSites,
	      					eligibleTrusts: data.eligibleTrusts,
	      					meta: data.meta,
	      				});
	    }).fail((jqXHR, textStatus, error) => {
	      const err = textStatus + " " + error;
	      console.log("Request failed: " + err);
	    });
  	}

  	// handling state methods

	handleSearchObjChange (key, value) {
		const searchObj = this.state.searchObj;
		searchObj[key] = value;
		this.setState({searchObj: searchObj});
	}
	handleDateChange (title, key, value) {
		const searchObj = this.state.searchObj;
		searchObj[title][key] = value;
		this.setState({searchObj: searchObj}, console.log("date_from state", this.state.searchObj.date_from));

	}
	handleSiteChange(updatedSites) {
		this.setState({paginatedSites: updatedSites});
	}

	// handling new fetch methods

	handlePaginate (pageNumber) {
	    this.state.page = pageNumber;
	    this.fetchSites();
	}
	sortBy (criterion) {
		this.state.sortCriterion = criterion;
		this.state.reverseOrder = !this.state.reverseOrder;
		this.state.page = 1;
		this.fetchSites();
	}
	handleSearchSubmit () {
		if (!this.state.visible) {
			this.state.visible = true;
			this.fetchSites();
		} else {
			this.fetchSites();
		}
	}

	// handling update/delete ajax methods

	handleSiteUpdate (id) {
		const paginatedSites = this.state.paginatedSites;
		const updatedSite = paginatedSites.filter((site) => {return site.id === id}).pop();
		const url = "/sites/" + id;
	    $.ajax({
	      method: 'PUT',
	      url: url,
	      data: {site: updatedSite},
	      dataType: 'JSON'
	    }).done((data, textStatus, jqXHR) => {

	    }).fail((jqXHR, textStatus, error) => {
	      const err = textStatus + " " + error;
	      console.log("Request failed: " + err);
	    });
	}
	handleSiteDelete (id) {
		const url = '/sites/' + id;
	    $.ajax({
	      method: 'DELETE',
	      url: url,
	      dataType: 'JSON',
	    }).done((data, textStatus, jqXHR) => {
	    	this.fetchSites();
	    }).fail((jqXHR, textStatus, error) => {
	      const err = textStatus + " " + error;
	      console.log("Request failed: " + err);
	    });
	}

	// helper methods

	formatDate (obj) {
		return (obj.year + "-" + obj.month + "-" + obj.day);
	}
	provideDefaultDate (dateObj, key) {
		const newDateObj = dateObj;
		if (key == 'date_from') {
			newDateObj.month = (dateObj.month == '' ? 1 : dateObj.month);
			newDateObj.day = (dateObj.day == '' ? 1 : dateObj.day);
			newDateObj.year = (dateObj.year == '' ? 1900 : dateObj.year);
			return this.formatDate(newDateObj)		
		}
		if (key == 'date_to') {
			newDateObj.month = (dateObj.month == '' ? 1 : dateObj.month);
			newDateObj.day = (dateObj.day == '' ? 1 : dateObj.day);
			newDateObj.year = (dateObj.year == '' ? 2015 : dateObj.year);
			return this.formatDate(newDateObj)		
		}
	}

	// subscription methods

	subscribeToEvents () {
	    PubSub.subscribe('resetButton:onClick', () => {
	      	const searchObj = {	keyword: '',
		                        name: '',
		                        city: '',
		                        state: '',
		                        country: '',
		                        date_from: {month: '',
											day: '',
											year: ''
											}, 
								date_to: {	month: '',
											day: '',
											year: ''
											}, 
	                       };
	     	this.setState({	page: 1, 
	     					visible: false, 
	     					searchObj: searchObj
	     					});
	    });
	}
	unsubscribeToEvents () {
	    PubSub.unsubscribe('resetButton:onClick');
	}

	// render

  	render () {
    	return 	<div> 
	    			<SearchPanel 
	    				searchObj={this.state.searchObj} 
	    				handleSearchObjChange={this.handleSearchObjChange} 
	    				handleDateChange={this.handleDateChange}
	    				handleSearchSubmit={this.handleSearchSubmit}
	    			/>
	    			<div className={this.state.visible ? '' : 'not-visible'}>
		    			<TrustPanel 
		    				eligibleTrusts={this.state.eligibleTrusts} 
		    				allTrusts={this.props.allTrusts} 
		    			/>
		    			<SitesPanel 
		    				paginatedSites={this.state.paginatedSites} 
		    				allTrusts={this.props.allTrusts} 
		    				metaObj={this.state.meta}
		    				handlePaginate={this.handlePaginate}
		    				sortBy={this.sortBy}
		    				reverseOrder={this.state.reverseOrder}
		    				handleSiteChange={this.handleSiteChange}
		    				handleSiteUpdate={this.handleSiteUpdate}
		    				handleSiteDelete={this.handleSiteDelete}
		    			/>
	    			</div>
				</div>;
  }
}

