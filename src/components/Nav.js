import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import { handleLogoutAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  state = {
    showMenu: false
  };

  render() {
    const { showMenu } = this.state;
    const { authedUser, users } = this.props;

    const avatarURL = users[authedUser.id] && users[authedUser.id].avatarURL;

    return (
      <nav className="nav">
        {authedUser.isAuthenticated === false ? (
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
            {showMenu ? (
              <li className="navText--logout">
                <button
                  onClick={() =>
                    this.props.dispatch(handleLogoutAuthedUser(authedUser.id))
                  }
                  className="navText navText--button"
                >
                  Logout
                </button>
                <button
                  className="navText navText--button"
                  onClick={() => this.setState({ showMenu: !showMenu })}
                >
                  Cancel
                </button>
              </li>
            ) : (
              <li className="navText--logout">
                {users[authedUser.id] ? (
                  <div className="Nav__avatar">
                    <img className="Nav__profile-pic" src={avatarURL} alt="" />
                  </div>
                ) : null}
                <button
                  className="navText navText--button"
                  onClick={() => this.setState({ showMenu: !showMenu })}
                >
                  {authedUser.id}
                </button>
              </li>
            )}
          </ul>
        )}
      </nav>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  };
};

export default connect(mapStateToProps)(Nav);
