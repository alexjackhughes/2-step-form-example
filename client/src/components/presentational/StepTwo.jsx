import React, { Component } from "react";
import * as moment from "moment";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.formOne,
      ...this.props.formTwo,
      date: moment().format("YYYY-MM-DDTHH:mm")
    };

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Current Location:
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Current Date:
          <input
            type="datetime-local"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            disabled={true}
          />
        </label>
        <label>
          User Feedback:
          <textarea
            type="textarea"
            name="feedback"
            value={this.state.feedback}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Next Step" />
        <button onClick={() => this.props.showNextForm(false)}>Go Back</button>
      </form>
    );
  }
}

export default StepTwo;
