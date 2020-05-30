import { combineReducers } from "redux";
import login from './loginReducer';
import common from './commonReducer';
import chat from './chatReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
}

const rootReducer = combineReducers({
  login,
  common,
  chat
});

export default persistReducer(persistConfig, rootReducer)