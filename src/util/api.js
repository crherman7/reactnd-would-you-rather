import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _authenticate,
} from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
};

export const saveQuestion = question => {
  return _saveQuestion(question);
};

export const saveQuestionAnswer = questionAnswer => {
  return _saveQuestionAnswer(questionAnswer);
};

export const authenticate = creds => {
  return _authenticate(creds);
};
