import React, { Component } from "react";

class RegisterForm extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    avatar: ""
  };

  handleValueChange = (type, value) => {
    this.setState({
      [type]: value
    });
  };

  render() {
    const { handleRegister } = this.props;
    const { name, username, password, avatar } = this.state;

    return (
      <div className="Form">
        <input
          spellCheck="false"
          type="text"
          className="Login__input Login__input--name"
          placeholder="Enter full name"
          value={name}
          onChange={e => this.handleValueChange("name", e.target.value)}
        />
        <input
          spellCheck="false"
          type="text"
          className="Login__input Login__input--username"
          placeholder="Enter username"
          value={username}
          onChange={e => this.handleValueChange("username", e.target.value)}
        />
        <input
          spellCheck="false"
          type="password"
          className="Login__input Login__input--password"
          placeholder="Enter password"
          value={password}
          onChange={e => this.handleValueChange("password", e.target.value)}
        />
        <button
          onClick={() => handleRegister(name, username, password, avatar)}
          className="Login__button"
        >
          Register
        </button>
      </div>
    );
  }
}

export default RegisterForm;
