import React, { Component } from "react";
import * as moment from "moment";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.form;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
    this.props.showNextForm(true);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            min={moment()
              .subtract(100, "years")
              .format("YYYY-MM-DD")}
            max={moment().format("YYYY-MM-DD")}
            value={this.state.dob}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Next Step" />
      </form>
    );
  }
}

export default StepOne;
