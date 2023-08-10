import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
