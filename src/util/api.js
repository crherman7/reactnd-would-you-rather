import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _authenticate
} from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
};

export const saveQuestion = () => {};

export const saveQuestionAnswer = () => {};

export const authenticate = (user, password) => {
  return _authenticate(user, password);
};
