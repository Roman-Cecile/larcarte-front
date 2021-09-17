import user from "../actionType";

const userAction = {
  logOut: () => {
    return {
      type: user.LOGOUT,
    };
  },
};

export default userAction;
