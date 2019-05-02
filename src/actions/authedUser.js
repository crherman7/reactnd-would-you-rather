import { authenticate } from "../util/api";

export const LOGIN_AUTHED_USER = "LOGIN_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";
export const REGISTER_AUTHED_USER = "REGISTER_AUTHED_USER";

const loginAuthedUser = user => {
  return {
    type: LOGIN_AUTHED_USER,
    user
  };
};

const logoutAuthedUser = id => {
  return {
    type: LOGOUT_AUTHED_USER,
    id
  };
};

const registerAuthedUser = registration => {
  return {
    type: REGISTER_AUTHED_USER,
    registration
  };
};

export const handleLoginAuthedUser = (username, password) => {
  return dispatch => {
    return authenticate({
      username,
      password
    })
      .then(user => dispatch(loginAuthedUser(user)))
      .catch(e => {
        alert(e);
      });
  };
};
