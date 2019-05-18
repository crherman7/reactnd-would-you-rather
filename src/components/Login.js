import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Login.css";
import {
  handleLoginAuthedUser,
  handleRegisterUser
} from "../actions/authedUser";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegistrationForm";

class Login extends Component {
  state = {
    login: true
  };

  handleSubmit = (username, password) => {
    this.props.dispatch(
      handleLoginAuthedUser({
        username,
        password
      })
    );
  };

  handleRegister = (name, username, password, avatar) => {
    this.props.dispatch(
      handleRegisterUser({
        name,
        username,
        password,
        avatar
      })
    );
  };

  handleSignUp = () => {
    this.setState(() => ({
      login: false
    }));
  };

  render() {
    return (
      <div className="Login">
        <div className="Login__title">Would You Rather?</div>
        {this.state.login ? (
          <LoginForm
            handleSubmit={this.handleSubmit}
            handleSignUp={this.handleSignUp}
          />
        ) : (
          <RegisterForm handleRegister={this.handleRegister} />
        )}
      </div>
    );
  }
}

export default connect()(Login);
