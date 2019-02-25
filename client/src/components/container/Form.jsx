import React, { Component } from "react";
import * as moment from "moment";

import StepOne from "../presentational/StepOne.jsx";
import StepTwo from "../presentational/StepTwo.jsx";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      showNextForm: false,
      formOne: {
        title: "",
        name: "",
        dob: moment().format("YYYY-MM-DD")
      },
      formTwo: {
        location: "",
        date: "",
        feedback: ""
      }
    };
  }

  submitFormOne(res) {
    this.setState({
      formOne: res
    });
  }

  showNextForm(bool) {
    this.setState({
      showNextForm: bool
    });
  }

  render() {
    return (
      <div className="form">
        {!this.state.showNextForm ? (
          <StepOne
            form={this.state.formOne}
            showNextForm={this.showNextForm.bind(this)}
            submit={this.submitFormOne.bind(this)}
          />
        ) : (
          <StepTwo
            formOne={this.state.formOne}
            formTwo={this.state.formTwo}
            showNextForm={this.showNextForm.bind(this)}
            submit={this.props.submit}
          />
        )}
      </div>
    );
  }
}

export default Form;
