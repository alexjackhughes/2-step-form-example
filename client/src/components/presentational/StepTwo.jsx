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
        <label>CURRENT LOCATION</label>
        <input
          type="text"
          name="location"
          className="col-sm"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <label>CURRENT DATE & TIME</label>
        <input
          type="datetime-local"
          name="date"
          className="col-sm"
          value={this.state.date}
          onChange={this.handleChange}
          disabled={true}
        />
        <label>USER FEEDBACK</label>
        <textarea
          type="textarea"
          name="feedback"
          className="col-sm"
          value={this.state.feedback}
          onChange={this.handleChange}
        />
        <input type="submit" value="SUBMIT FORM" />
        <button onClick={() => this.props.showNextForm(false)}>GO BACK</button>
      </form>
    );
  }
}

export default StepTwo;
