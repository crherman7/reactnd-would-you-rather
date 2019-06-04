import React, { Component } from "react";
import "../styles/NewQuestion.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  };

  handleChange = (option, e) => {
    this.setState({ [option]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAddQuestion(
        this.state.optionOne,
        this.state.optionTwo,
        this.props.userId
      )
    );
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;

    return (
      <div className="NewQuestion-container">
        <div className="NewQuestion__title-text">would you rather...</div>
        <textarea
          placeholder="what's option one?"
          className="NewQuestion__option"
          value={optionOne}
          onChange={e => this.handleChange("optionOne", e)}
        />
        <div className="NewQuestion__divider-text">or</div>
        <textarea
          placeholder="what's option two?"
          className="NewQuestion__option"
          value={optionTwo}
          onChange={e => this.handleChange("optionTwo", e)}
        />
        <button
          onClick={this.handleClick}
          className="NewQuestion__submit-button"
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    userId: authedUser.id
  };
};

export default withRouter(connect(mapStateToProps)(NewQuestion));
