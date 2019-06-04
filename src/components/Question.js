import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Question.css";
import { handleAnswerQuestion } from "../actions/questions";

class Question extends Component {
  handleClickChoice = (e, choice) => {
    e.preventDefault();
    console.log(choice);
    this.props.dispatch(
      handleAnswerQuestion(this.props.user.id, this.props.question_id, choice)
    );
  };

  totalVotes = () => {
    const sum =
      this.props.question.optionOne.votes.length +
      this.props.question.optionTwo.votes.length;
    return sum;
  };

  calculatePercentage = length => {
    let percentage =
      (this.totalVotes() === 0 ? 0 : length / this.totalVotes()) * 100;

    return percentage;
  };

  render() {
    const { question_id, question, user, users } = this.props;
    const disabled = question && user.answers.hasOwnProperty(question_id);
    const optionOneStyle =
      disabled && user.answers[question_id] === "optionOne"
        ? { backgroundColor: "lightgreen", boxShadow: "0px 0px 5px #e8e8e8" }
        : { backgroundColor: "white" };
    const optionTwoStyle =
      disabled && user.answers[question_id] === "optionTwo"
        ? { backgroundColor: "lightgreen", boxShadow: "0px 0px 5px #e8e8e8" }
        : { backgroundColor: "white" };
    const percentageOne =
      question && this.calculatePercentage(question.optionOne.votes.length);
    const percentageTwo =
      question && this.calculatePercentage(question.optionTwo.votes.length);

    return (
      <div>
        {question ? (
          <div className="Question-container">
            <div className="Question__title-text">would you rather...</div>
            <button
              onClick={e => this.handleClickChoice(e, "optionOne")}
              className="Question__option"
              style={optionOneStyle}
              disabled={disabled}
            >
              {question.optionOne.text}
            </button>
            <div className="Question__statistics">
              <div className="Question__percentage">{percentageOne}%</div>
              <div className="Question__votes">
                {question.optionOne.votes.length} vote(s)
              </div>
            </div>
            <div className="Question__divider-text">or</div>
            <button
              onClick={e => this.handleClickChoice(e, "optionTwo")}
              className="Question__option"
              style={optionTwoStyle}
              disabled={disabled}
            >
              {question.optionTwo.text}
            </button>
            <div className="Question__statistics">
              <div className="Question__percentage">{percentageTwo}%</div>
              <div className="Question__votes">
                {question.optionTwo.votes.length} vote(s)
              </div>
            </div>
            <div className="Question__author">
              <div className="Question__author--pre">Posted by: </div>
              <div className="Question__avatar">
                <img
                  className="Question__avatar--pic"
                  src={users[question.author].avatarURL}
                  alt=""
                />
              </div>
              <div className="Question__author--name">
                {users[question.author].name}
              </div>
            </div>
          </div>
        ) : (
          <div className="Question-container--404">404</div>
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
    user: users[authedUser.id],
    users
  };
};

export default connect(mapStateToProps)(Question);
