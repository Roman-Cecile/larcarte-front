// Actions
import generalAction from "../../actions/Generals/actionType";

export const initialState = {
  loader: false,
};

const generalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case generalAction.TOGGLE_LOADER: {
      return {
        ...state,
        loader: !state.loader,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default generalReducer;
