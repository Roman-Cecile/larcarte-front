import axios from "axios";

// Url
import { url } from "../../utils/constants";

// Actions Types
import restaurantAction from "../../actions/Restaurant/actionType";

// Action Creators
import generalAction from "../../actions/Generals/actionCreators";

axios.defaults.withCredentials = true;
const restaurant = (store) => (next) => (action) => {
  console.info("MIDDLEWARE restaurant >", action.type);
  switch (action.type) {
    case restaurantAction.CREATE: {
      store.dispatch(generalAction.toggleLoader());
      axios({
        method: "POST",
        url: `${url}/login`,
      })
        .then(({ data }) => {
          // console.log({ data });
          store.dispatch(generalAction.toggleLoader());
        })
        .catch((error) => {
          console.trace(error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default restaurant;
