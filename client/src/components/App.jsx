import React, { Component } from "react";
import axios from "axios";

import Form from "./container/Form.jsx";
import Footer from "./presentational/Footer.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      form: {},
      alert: {
        success: false,
        message: null
      }
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get("http://localhost:3003/");
      if (res.status == 200) {
        this.setState({
          title: res.data.title,
          body: res.data.body,
          form: res.data.form
        });
      }
    } catch (e) {
      this.handleAlert(false, e.message);
    }
  }

  handleAlert(success, message) {
    this.setState({
      alert: {
        success,
        message
      }
    });
  }

  async handleSubmit(params) {
    try {
      const res = await axios.post("http://localhost:3003/form", params);
      if (res.data.message === 200) {
        this.handleAlert(true, res.data.message);
      }

      this.handleAlert(
        false,
        "There was an error submitting, please try again!"
      );
    } catch (e) {
      this.handleAlert(false, e.message);
    }
  }

  render() {
    const alertClass = `alert ${
      this.state.alert.success ? "alert-success" : "alert-danger"
    }`;

    return (
      <div className="App">
        {this.state.alert.message ? (
          <div className={alertClass} role="alert">
            {this.state.alert.message}
          </div>
        ) : null}
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <Form form={this.state.form} submit={this.handleSubmit.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
