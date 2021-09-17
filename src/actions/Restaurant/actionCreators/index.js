import restaurant from "../actionType";

const restaurantAction = {
  create(datas) {
    return {
      type: restaurant.CREATE,
      datas,
    };
  },

  addToFavorite(restaurantId, userId) {
    return {
      type: restaurant.ADD_TO_FAVORITE,
      restaurantId,
      userId,
    };
  },
};

export default restaurantAction;
