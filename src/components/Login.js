import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Login.css";
import {
  handleLoginAuthedUser,
} from "../actions/authedUser";
import LoginForm from "./LoginForm";

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

  render() {
    return (
      <div className="Login">
        <div className="Login__title">Would You Rather?</div>
        <LoginForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(Login);
