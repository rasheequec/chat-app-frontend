import { combineReducers } from "redux";
import login from './loginReducer';
import common from './commonReducer';
import chat from './chatReducer';
export default combineReducers({
  login,
  common,
  chat
});