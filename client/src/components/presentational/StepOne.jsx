import React, { Component } from "react";

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      name: "",
      dob: "2018-07-22"
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
            min="1900-01-01"
            max="2018-12-31"
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
