import { isAuth, email, name } from "./isAuth";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  isAuthUser: isAuth,
  userEmail: email,
  userName: name,
});

export default allReducers;
