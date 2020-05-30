import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';

const loggerMiddleware = createLogger();
export const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));
export const persistor = persistStore(store)
export default { store, persistor };