import general from "../actionType";

const generalAction = {
  toggleLoader() {
    return {
      type: general.TOGGLE_LOADER,
    };
  },
};

export default generalAction;
