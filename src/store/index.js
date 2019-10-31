import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../saga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleWare();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
