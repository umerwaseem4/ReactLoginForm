import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    password: "",
    nameError: "",
    passwordError: "",
  };

  valid = () => {
    if (!this.state.name.includes("@") && this.state.password.length < 5) {
      this.setState({
        nameError: "Invalid Name",
        passwordError: "Password length more than 5",
      });
    } else if (!this.state.name.includes("@")) {
      this.setState({
        nameError: "Invalid Name",
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length more than 5",
      });
    } else {
      return true;
    }
  };

  submit = () => {
    this.setState({ nameError: "", passwordError: "" });
    if (this.valid()) {
      alert("Form Submited");
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <p style={{ color: "red", fontWeight: "bold" }}>
          {this.state.nameError}
        </p>
        {/* Password */}
        <input
          type="password"
          onChange={(event) => this.setState({ password: event.target.value })}
        />
        <p style={{ color: "red", fontWeight: "bold" }}>
          {this.state.passwordError}
        </p>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default App;
