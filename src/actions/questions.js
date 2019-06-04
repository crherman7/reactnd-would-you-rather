import { saveQuestion, saveQuestionAnswer } from "../util/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { userAnswers, userAsks } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

const addQuestion = (userId, question) => {
  return {
    type: ADD_QUESTION,
    question,
    userId
  };
};

const answerQuestion = (userId, questionId, option) => {
  return {
    type: ANSWER_QUESTION,
    questionId,
    userId,
    option
  };
};

export const handleAddQuestion = (optionOneText, optionTwoText, author) => {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      formattedQuestion => {
        dispatch(addQuestion(author, formattedQuestion));
        dispatch(userAsks(formattedQuestion));
        dispatch(hideLoading());
      }
    );
  };
};

export const handleAnswerQuestion = (authedUser, qid, answer) => {
  return dispatch => {
    dispatch(showLoading());
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(answerQuestion(authedUser, qid, answer));
      dispatch(userAnswers(authedUser, qid, answer));
      dispatch(hideLoading());
    });
  };
};
