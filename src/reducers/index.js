import { combineReducers } from "redux";
import login from './loginReducer';
import common from './commonReducer';
export default combineReducers({
  login,
  common
});