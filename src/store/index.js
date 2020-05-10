import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootreducer from "../reducers/index";
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(rootreducer, applyMiddleware(thunk, loggerMiddleware));
export default store;