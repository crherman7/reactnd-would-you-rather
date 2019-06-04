export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ANSWERS = "USER_ANSWERS";
export const USER_ASKS = "USER_ASKS";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const userAnswers = (userId, questionId, option) => {
  return {
    type: USER_ANSWERS,
    userId,
    questionId,
    option
  };
};

export const userAsks = (question) => {
  return {
    type: USER_ASKS,
    question
  };
};
