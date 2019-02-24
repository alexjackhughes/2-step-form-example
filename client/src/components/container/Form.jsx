import React, { Component } from "react";

import StepOne from "../presentational/StepOne.jsx";
import StepTwo from "../presentational/StepTwo.jsx";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      showNextForm: false,
      formOne: {}
    };
  }

  submitFormOne(res) {
    this.setState({
      form: res,
      showNextForm: true
    });
  }

  render() {
    return (
      <div className="form">
        {!this.state.showNextForm ? (
          <StepOne
            fields={this.props.form.stepOne}
            submit={this.submitFormOne.bind(this)}
          />
        ) : (
          <StepTwo
            fields={this.props.form.stepTwo}
            completedForm={this.state.formOne}
            submit={this.props.submit}
          />
        )}
      </div>
    );
  }
}

export default Form;
