import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question
      };
    case ANSWER_QUESTION:
      const { questionId, userId, option } = action;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [option]: {
            text: state[questionId][option].text,
            votes: state[questionId][option].votes.concat([userId])
          }
        }
      };
    default:
      return state;
  }
};

export default questions;
