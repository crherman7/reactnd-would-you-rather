import { authenticate, register } from "../util/api";
import { handleInitialData } from "./shared";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const loginRequest = creds => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
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

const registerRequest = info => {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    info
  };
};

const registerSuccess = user => {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id: user.id
  };
};

const registerFailure = message => {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
};

export const handleRegisterUser = info => {
  return dispatch => {
    dispatch(registerRequest(info));
    return register({
      info
    })
      .then(user => dispatch(registerSuccess(user)))
      .catch(e => dispatch(registerFailure(e)));
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
