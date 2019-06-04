import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../styles/QuestionsItem.css";

class QuestionsItem extends Component {
  state = {
    colorBackground: ["white", "white"]
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

  determineBackgroundColor = () => {
    const hasOptionOne = this.props.question.optionOne.votes.includes(
      this.props.userId
    );
    const hasOptionTwo = this.props.question.optionTwo.votes.includes(
      this.props.userId
    );

    hasOptionOne &&
      this.setState(() => ({
        colorBackground: ["lightgreen", "white"]
      }));

    hasOptionTwo &&
      this.setState(() => ({
        colorBackground: ["white", "lightgreen"]
      }));
  };

  componentDidMount() {
    this.determineBackgroundColor();
  }

  render() {
    const { question } = this.props;
    const { colorBackground } = this.state;
    const percentageOne = this.calculatePercentage(
      question.optionOne.votes.length
    );
    const percentageTwo = this.calculatePercentage(
      question.optionTwo.votes.length
    );

    return (
      <div
        onClick={() => this.props.history.push(`/questions/${question.id}`)}
        className="QuestionsItem-container"
      >
        <div className="QuestionsItem__item">
          <div className="QuestionsItem__item--title">author</div>
          <div className="QuestionsItem__item--value">{question.author}</div>
        </div>
        <div className="QuestionsItem__item">
          <div className="QuestionsItem__item--title">option 1 (black)</div>
          <div
            className="QuestionsItem__item--value"
            style={{ backgroundColor: `${colorBackground[0]}` }}
          >
            {question.optionOne.text}
          </div>
        </div>
        <div className="QuestionsItem__item">
          <div className="QuestionsItem__item--title">option 2 (grey)</div>
          <div
            className="QuestionsItem__item--value"
            style={{ backgroundColor: `${colorBackground[1]}` }}
          >
            {question.optionTwo.text}
          </div>
        </div>
        <div className="QuestionsItem__item">
          <div
            className="QuestionsItem__item--percentage__one"
            style={{ width: `${percentageOne}%` }}
          >
            {percentageOne}%
          </div>
          <div
            className="QuestionsItem__item--percentage__two"
            style={{ width: `${percentageTwo}%` }}
          >
            {percentageTwo}%
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(QuestionsItem);
