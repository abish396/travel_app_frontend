import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css"; // for better fonts and form styles to demo with

import { DateRangePicker } from "react-dates";

export default class Search extends Component {
  BLOCKED_DATES = [
    moment().add(10, "days"),
    moment().add(11, "days"),
    moment().add(12, "days"),
  ];

  constructor(props) {
    super(props);
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
    console.log("searcgh", this.props);

    try {
      //let response = await fetch(`/treks?startDate=${startDate}&endDate=${startDate}`);
      this.props.setItems([
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
      ]);
      // this.setState({
      //   items: [
      //     {
      //       _id: "5f8b3fbabfbbea21b866c46d",
      //       name: "Har ki Dun Trek",
      //       photos: [],
      //       description: "Located in Uttarkashi district of Uttrakhand",
      //     },
      //     {
      //       _id: "5f8b3fbabfbbea21b866c46d",
      //       name: "Har ki Dun Trek",
      //       photos: [],
      //       description: "Located in Uttarkashi district of Uttrakhand",
      //     },
      //     {
      //       _id: "5f8b3fbabfbbea21b866c46d",
      //       name: "Har ki Dun Trek",
      //       photos: [],
      //       description: "Located in Uttarkashi district of Uttrakhand",
      //     },
      //     {
      //       _id: "5f8b3fbabfbbea21b866c46d",
      //       name: "Har ki Dun Trek",
      //       photos: [],
      //       description: "Located in Uttarkashi district of Uttrakhand",
      //     },
      //   ],
      // });
    } catch (e) {
      console.log(e);
    }
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
    // const searchState = useContext(searchContext);
    // const { dispatch } = searchState;
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
        //dispatch({type:'update items', items:data})
        this.props.setItems(data);
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
        <div className="container">
          <div className="mt-5">
            <form>
              <div className="form-row">
                <div className="col-3 offset-lg-3">
                  <input
                    type="text"
                    placeholder="Where Are You Going?"
                    style={{
                      height: "48px",
                      color: "#495057",
                      borderTopLeftRadius: "30px",
                      borderBottomLeftRadius: "30px",
                      backgroundColor: "transparent",
                      border: "1px solid #E3E3E3",
                      fontSize: "0.8571em",
                      display: "block",
                      width: "100%",
                      padding: ".375rem .75rem",
                    }}
                  />
                </div>
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

                <div className="col-1">
                  <Link to="/search/treks" className="col-lg-3">
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        this.handleSearch();
                      }}
                      style={{
                        margin: "0px",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        height: "48px",
                        borderTopRightRadius: "30px",
                        borderBottomRightRadius: "30px",
                        marginLeft:"-15px"
                      }}
                      type="button"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <Items items={this.state.items}></Items> */}
        </React.Fragment>
    );
  }
}
