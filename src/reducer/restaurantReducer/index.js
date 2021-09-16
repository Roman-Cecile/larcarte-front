// Actions
import restaurant from "../../actions/Restaurant/actionType";

export const initialState = {
  loader: false,
};

const restaurantReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;
