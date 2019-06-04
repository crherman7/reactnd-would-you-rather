import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from "../actions/authedUser";

const authedUser = (
  state = { isFetching: false, isAuthenticated: false },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false,
        id: action.creds.username
      };
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        id: action.id,
        errorMessage: ""
      };
    case LOGOUT_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: true,
        id: action.userId
      };
    case LOGOUT_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: false,
        id: action.userId
      };
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      };
    default:
      return state;
  }
};

export default authedUser;
