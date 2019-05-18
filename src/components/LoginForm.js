import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = value => {
    this.setState({
      username: value
    });
  };

  handlePasswordChange = value => {
    this.setState({
      password: value
    });
  };

  render() {
    const { handleSubmit, handleSignUp } = this.props;
    const { username, password } = this.state;

    return (
      <div className="Form">
        <input
          spellCheck="false"
          className="Login__input Login__input--username"
          type="text"
          placeholder="Enter username"
          value={this.state.username}
          onChange={e => this.handleUsernameChange(e.target.value)}
        />
        <input
          className="Login__input Login__input--password"
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={e => this.handlePasswordChange(e.target.value)}
        />
        <div className="Login__button-group">
          <button
            onClick={() => handleSubmit(username, password)}
            className="Login__button Login__button--login"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="Login__button Login__button--register"
          >
            Sign Up!
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
