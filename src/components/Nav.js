import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        {this.props.authedUser.isAuthenticated === false ? (
          <ul>
            <li>
              <NavLink className="navText" to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink
                className="navText"
                to="/"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navText" to="/add" activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navText"
                to="/leaderboard"
                activeClassName="active"
              >
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink className="navText" to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="navText--logout">
              <NavLink
                className="navText"
                to="/logout"
                activeClassName="active"
              >
                {this.props.authedUser.id}
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser: authedUser
  };
};

export default connect(mapStateToProps)(Nav);
