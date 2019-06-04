import { RECEIVE_USERS, USER_ANSWERS, USER_ASKS } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case USER_ANSWERS:
      const { userId, questionId, option } = action;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [questionId]: option
          }
        }
      };
    case USER_ASKS:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      };
    default:
      return state;
  }
};

export default users;
