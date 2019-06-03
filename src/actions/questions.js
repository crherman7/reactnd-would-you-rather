export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const receiveQuestions = questions => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
};

export const addQuestion = (userId, question) => {
  return {
    type: ADD_QUESTION,
    question,
    userId
  };
};

export const answerQuestion = (userId, questionId, option) => {
  return {
    type: ANSWER_QUESTION,
    questionId,
    userId,
    option
  };
};
