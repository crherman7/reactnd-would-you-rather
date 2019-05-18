import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _authenticate,
  _register
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

export const authenticate = creds => {
  return _authenticate(creds);
};

export const register = info => {
  return _register(info);
};
