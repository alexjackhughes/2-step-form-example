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
      url: "http://localhost:3003",
      alert: {
        success: false,
        message: null
      }
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(this.state.url);
      if (res.status == 200) {
        this.setState({
          title: res.data.title,
          body: res.data.body
        });
        return;
      }
      this.handleAlert(
        false,
        "Oops! We're struggling to connect, please try again later!"
      );
    } catch (e) {
      this.handleAlert(false, e.message);
    }
  }

  async handleSubmit(params) {
    try {
      const res = await axios.post(`${this.state.url}/form`, params);
      console.log(res);
      if (res.status === 200) {
        this.handleAlert(true, res.data.message);
        return;
      }

      this.handleAlert(
        false,
        "There was an error submitting, please try again!"
      );
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

  renderAlert() {
    const alertClass = `alert ${
      this.state.alert.success ? "alert-success" : "alert-danger"
    }`;

    return this.state.alert.message ? (
      <div className={alertClass} role="alert">
        {this.state.alert.message}
      </div>
    ) : null;
  }

  render() {
    return (
      <div className="App">
        {this.renderAlert()}
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <Form submit={this.handleSubmit.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
