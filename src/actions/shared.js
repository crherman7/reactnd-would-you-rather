import { getInitialData } from "../util/api";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      console.log(users);
      console.log(questions);
    });
  };
}
