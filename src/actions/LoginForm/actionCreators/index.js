import login from "../actionType";

const loginAction = {
  // MIDDLEWARE
  submitLogin(datas) {
    return {
      type: login.SUBMIT_LOGIN,
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
