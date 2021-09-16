import { combineReducers } from "redux";
import userReducer from "./userReducer/index";
import restaurantReducer from "./restaurantReducer/index";
import generalReducer from "./generalReducer/index";

export default combineReducers({
  userReducer,
  restaurantReducer,
  generalReducer,
});
