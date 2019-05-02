import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Login.css";
import { handleLoginAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    username: "",
    password: "",
    login: true
  };

  handleSubmit = () => {
    this.props.dispatch(
      handleLoginAuthedUser(this.state.username, this.state.password)
    );
  };

  handleSignUp = () => {
    this.setState(() => ({
      login: false
    }));
  };

  handleUsernameChange = value => {
    this.setState(() => ({
      username: value
    }));
  };

  handlePasswordChange = value => {
    this.setState(() => ({
      password: value
    }));
  };

  render() {
    return (
      <div className="Login">
        <div className="Login__title">Would You Rather?</div>
        {this.state.login ? (
          <LoginForm
            username={this.state.username}
            password={this.state.password}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit}
            handleSignUp={this.handleSignUp}
          />
        ) : (
          <RegisterForm />
        )}
      </div>
    );
  }
}

export default connect()(Login);

const LoginForm = props => {
  const {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
    handleSignUp
  } = props;
  return (
    <div className="Form">
      <input
        spellCheck="false"
        className="Login__input Login__input--username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={e => handleUsernameChange(e.target.value)}
      />
      <input
        className="Login__input Login__input--password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => handlePasswordChange(e.target.value)}
      />
      <div className="Login__button-group">
        <button
          onClick={handleSubmit}
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
};

const RegisterForm = props => {
  return (
    <div className="Form">
      <input
        className="Login__input Login__input--name"
        placeholder="Enter full name"
      />
      <input
        className="Login__input Login__input--username"
        placeholder="Enter username"
      />
      <input
        className="Login__input Login__input--password"
        placeholder="Enter password"
      />
      <input
        className="Login__input Login__input--avatar"
        placeholder="Select avatar"
      />
      <button className="Login__button">Register</button>
    </div>
  );
};
