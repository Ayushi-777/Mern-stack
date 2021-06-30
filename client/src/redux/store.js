import { createStore, applyMiddleware } from "redux";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  export default store;