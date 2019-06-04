import { authenticate } from "../util/api";
import { handleInitialData } from "./shared";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

const loginRequest = creds => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
};

const logoutRequest = userId => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
    userId
  };
};

const logoutSuccess = userId => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
    userId
  };
};

const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id: user.id
  };
};

const loginError = message => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
};

export const handleLoginAuthedUser = creds => {
  return dispatch => {
    dispatch(loginRequest(creds));
    return authenticate({
      creds
    })
      .then(user => dispatch(loginSuccess(user)))
      .then(() => dispatch(handleInitialData()))
      .catch(e => dispatch(loginError(e)));
  };
};

export const handleLogoutAuthedUser = userId => {
  return dispatch => {
    dispatch(logoutRequest(userId));
    dispatch(logoutSuccess(userId));
  };
};
