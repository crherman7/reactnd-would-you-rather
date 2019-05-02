import {
  LOGIN_AUTHED_USER,
  LOGOUT_AUTHED_USER,
  REGISTER_AUTHED_USER
} from "../actions/authedUser";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.user;
    case LOGOUT_AUTHED_USER:
      return state;
    case REGISTER_AUTHED_USER:
      return state;
    default:
      return state;
  }
};

export default authedUser;
