import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "../reducer";
import user from "../middleware/user";
import Restaurant from "../middleware/Restaurant";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(user, Restaurant));

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
