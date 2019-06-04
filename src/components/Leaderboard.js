import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Leaderboard.css";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="Leaderboard-container">
        <div className="Leaderboard-title">Leaderboard</div>
        <div className="Leaderboard-header">
          <div className="Leaderboard-header__item-pic" />
          <div className="Leaderboard-header__item">Name</div>
          <div className="Leaderboard-header__item">Asked</div>
          <div className="Leaderboard-header__item">Answered</div>
        </div>
        {users.map(user => (
          <div key={user.id} className="Leaderboard-item-container">
            <div className="Leaderboard-item-item Leaderboard__image-cropper">
              <img
                className="Leaderboard__profile-pic"
                src={user.avatarURL}
                alt=""
              />
            </div>
            <div className="Leaderboard-item-item">{user.name}</div>
            <div className="Leaderboard-item-item">{user.questions.length}</div>
            <div className="Leaderboard-item-item">
              {Object.keys(user.answers).length}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        b.questions.length +
        Object.keys(b.answers).length -
        (a.questions.length + Object.keys(a.answers).length)
    )
  };
};

export default connect(mapStateToProps)(Leaderboard);
