import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css"; // for better fonts and form styles to demo with

import { DateRangePicker } from "react-dates";

export default class CheckOutFormComponent extends Component {
  BLOCKED_DATES = [
    moment().add(10, "days"),
    moment().add(11, "days"),
    moment().add(12, "days"),
  ];

  constructor() {
    super();
    this.state = {
      focusedInput: null,
      startDate: moment(),
      endDate: moment().add(7, "days"),
      fullscreen: false,
      direction: "right",
      dateFormat: "MM/DD/YYYY",
      small: false,
      block: false,
      orientation: "horizontal",
      numMonths: 2,
      minimumNights: 7,
      items: [],
    };
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangeDateFormat = this.handleChangeDateFormat.bind(this);
    this.handleIsDayBlocked = this.handleIsDayBlocked.bind(this);
  }

  handleSearch() {
    console.log("searcgh");
    try {
      //let response = await fetch(`/treks?startDate=${startDate}&endDate=${startDate}`);
      this.setState({
        items: [
          {
            _id: "5f8b3fbabfbbea21b866c46d",
            name: "Har ki Dun Trek",
            photos: [],
            description: "Located in Uttarkashi district of Uttrakhand",
          },
          {
            _id: "5f8b3fbabfbbea21b866c46d",
            name: "Har ki Dun Trek",
            photos: [],
            description: "Located in Uttarkashi district of Uttrakhand",
          },
          {
            _id: "5f8b3fbabfbbea21b866c46d",
            name: "Har ki Dun Trek",
            photos: [],
            description: "Located in Uttarkashi district of Uttrakhand",
          },
          {
            _id: "5f8b3fbabfbbea21b866c46d",
            name: "Har ki Dun Trek",
            photos: [],
            description: "Located in Uttarkashi district of Uttrakhand",
          },
        ],
      });
    } catch (e) {}
  }

  handleDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  handleFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleChangeFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  handleChangeDirection(e) {
    this.setState({ direction: e.target.value });
  }

  handleChangeDateFormat(e) {
    this.setState({ dateFormat: e.target.value });
  }

  handleIsDayBlocked(day) {
    return this.BLOCKED_DATES.filter((d) => d.isSame(day, "day")).length > 0;
  }

  getTreks = () => {
    fetch(
      `/gettreks?startDate=${this.state.startDate}&endDate=${this.state.endDate}&location=${this.state.location}`
    ).then((response) => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        //TODO: aler popup
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        this.setState({
          items: data,
        });
      });
    });
  };

  // handleSearch = () => {
  //   this.getTreks();
  // };

  componentDidMount = () => {
    this.getTreks();
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid rgb(221, 221, 221)",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px",
          }}
        >
          <div className="row">
            <div className="col-6">
              <h3>
                ₹8500{" "}
                <span style={{ fontSize: "0.5em", color: "grey" }}>4D 5N</span>
              </h3>
            </div>
            <div className="col-6">
              <span></span>
            </div>
          </div>
          <form>
            <div className="form-row" style={{paddingLeft:"10%"}}>
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={this.handleDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
                displayFormat={this.state.dateFormat}
                hideKeyboardShortcutsPanel={true}
                numberOfMonths={this.state.numMonths || 2}
                block={this.state.block}
                small={this.state.small}
                withFullScreenPortal={this.state.fullscreen}
                anchorDirection={this.state.direction}
                orientation={this.state.orientation}
                minimumNights={this.state.minimumNights}
                isDayBlocked={this.handleIsDayBlocked}
              />
            </div>
            <div className="form-row">
              {/* <label>Add Your Buddy</label> */}
              <input
                type="number"
                className="form-control"
                placeholder="Add More Persons"
                style={{
                  width: "80.5%",
                  margin: "auto",
                  borderRadius:"0px",
                  height:"40px"
                }}
              />
            </div>

            <div className="form-row pl-4">
              <button type="button" className="btn btn-primary col-lg-11">
                Checkout
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
