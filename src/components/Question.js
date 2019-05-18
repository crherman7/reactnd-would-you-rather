import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Question.css";

class Question extends Component {
  render() {
    const { question_id, question, user } = this.props;

    return (
      <div>
        {question && (
          <div className="Question-container">
            <div className="Question__option">{question.optionOne.text}</div>
            <div className="Question__divider-text">or</div>
            <div className="Question__option">{question.optionTwo.text}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser, users }, props) => {
  const { question_id } = props.match.params;

  return {
    question_id,
    question: questions[question_id],
    user: users[authedUser.id]
  };
};

export default connect(mapStateToProps)(Question);
