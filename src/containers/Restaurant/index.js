import { connect } from "react-redux";

// COMPONENT
import RestaurantComponent from "../../components/Restaurant";

// ACTIONS
import restaurantAction from "../../actions/Restaurant/actionCreators";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (restaurantId, userId) => {
    dispatch(restaurantAction.addToFavorite(restaurantId, userId));
  },
});

export const Restaurant = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantComponent);
