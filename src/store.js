import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

import commentsReducer from "./commentsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ commentsReducer });

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
