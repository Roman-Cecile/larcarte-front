import login from "../actionType";

const loginAction = {
  // MIDDLEWARE
  submitSignin(datas) {
    return {
      type: login.SUBMIT_SIGNIN,
      datas,
    };
  },

  submitSignup(datas) {
    return {
      type: login.SUBMIT_SIGNUP,
      datas,
    };
  },

  // REDUCER
  saveLogin(datas) {
    return {
      type: login.SAVE_LOGIN,
      datas,
    };
  },
};

export default loginAction;
