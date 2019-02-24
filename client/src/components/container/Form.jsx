import React, { Component } from "react";
import StepOne from "../presentational/StepOne.jsx";
import StepTwo from "../presentational/StepTwo.jsx";
import axios from "axios";

class Form extends Component {
  async componentDidMount() {
    const data = await axios.get("http://localhost:3003/");
    console.log("data");
  }
  render() {
    return (
      <div className="form">
        <h1>Hello form!</h1>
        <StepOne />
        <StepTwo />
      </div>
    );
  }
}

export default Form;
