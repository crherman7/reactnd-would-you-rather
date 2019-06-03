import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsItem from "./QuestionsItem";
import "../styles/Questions.css";

class Questions extends Component {
  render() {
    const { questions, authedUser, users } = this.props;
    return (
      <div className="Questions-container">
        <div className="Questions--title">Unanswered Questions</div>
        {Object.entries(questions)
          .filter(([key, value]) => !users[authedUser.id].answers[value.id])
          .map(([key, value]) => (
            <QuestionsItem key={key} question={value} userId={authedUser.id} />
          ))}
        <div className="Questions--title">Answered Questions</div>
        {Object.entries(questions)
          .filter(([key, value]) => users[authedUser.id].answers[value.id])
          .map(([key, value]) => (
            <QuestionsItem key={key} question={value} userId={authedUser.id} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
  return {
    questions: Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
    ),
    authedUser,
    users
  };
};

export default connect(mapStateToProps)(Questions);
