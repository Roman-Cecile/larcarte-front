// Actions
import login from "../../actions/LoginForm/actionType";

export const initialState = {
  isLogin: false,
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
