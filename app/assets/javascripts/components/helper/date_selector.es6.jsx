class DateSelector extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // handling methods

  handleChange (e) {
    e.preventDefault();
    this.props.handleDateChange(this.props.name, e.target.name, e.target.value);
  }

  // render

  render () {
    const classes = "col-sm-6 " + this.props.classes;
    return (
      <div className={classes}>
       <div className="input-group date-group">
          <span className="input-group-addon date-selector-title">{this.props.title}</span>
          <select 
            placeholder="Month"
            title="Month"
            className="form-control" 
            name="month" 
            value={this.props.date.month} 
            onChange={this.handleChange}>
              <option disabled hidden>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <input 
              type="text"
              name="day"
              className="form-control"
              value={this.props.date.day}
              placeholder="Day"
              onChange={this.handleChange}
            />
            <input 
              type="text"
              name="year"
              className="form-control"
              value={this.props.date.year}
              placeholder="Year"
              onChange={this.handleChange}
            />
        </div> 
      </div>
    );
  }
}
