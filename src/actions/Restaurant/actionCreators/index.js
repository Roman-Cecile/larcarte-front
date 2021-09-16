import restaurant from "../actionType";

const restaurantAction = {
  create(datas) {
    return {
      type: restaurant.CREATE,
      datas,
    };
  },
};

export default restaurantAction;
