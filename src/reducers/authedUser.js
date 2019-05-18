import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
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
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      };
    case REGISTER_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false,
        id: action.info.username
      };
    case REGISTER_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        id: action.id
      };
    case REGISTER_FAILURE:
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
