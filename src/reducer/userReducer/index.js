// Actions
import login from "../../actions/Form/actionType";

export const initialState = {
  isLogin: true,
  user: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case login.SAVE_LOGIN: {
      return {
        ...state,
        isLogin: true,
        user: action.datas,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
