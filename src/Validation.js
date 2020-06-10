import React, { Component } from "react";
import "./Validation.css";
import logo from "./githublogo.svg";

export default class Validation extends Component {
  state = {
    name: "",
    password: "",
    ConfirmPassword: "",
    nameError: "",
    passwordError: "",
    ConfirmPasswordError: "",
  };

  valid = () => {
    if (this.state.name < 4) {
      this.setState({ nameError: "Need more than 4" });
      console.log(this.state.nameError);
    }
  };

  submit = (e) => {
    if (this.valid()) {
      alert("form Submitted");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="form-control">
          {/* <h1>Validation</h1> */}
          <img src={logo} alt="logo" className="logo" />
          <form action="" className="form-area">
            <div className="centerinput">
              <input
                type="text"
                placeholder="Enter Username"
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
              <p>{this.state.nameError}</p>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
              />
              <p>{this.state.passwordError}</p>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(event) =>
                  this.setState({ ConfirmPasswordError: event.target.value })
                }
              />
              <p>{this.state.ConfirmPasswordError}</p>
              <button className="btn" onClick={() => this.submit()}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
