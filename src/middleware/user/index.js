import axios from "axios";

// Url
import { url } from "../../utils/constants";

// Actions Types
import login from "../../actions/Form/actionType";

axios.defaults.withCredentials = true;
const user = (store) => (next) => (action) => {
  console.info("MIDDLEWARE USER >", action.type);
  switch (action.type) {
    case login.SUBMIT_SIGNIN: {
      axios({
        method: "POST",
        url: `${url}/login`,
      })
        .then(({ data }) => {
          // console.log({ data });
        })
        .catch((error) => {
          console.trace(error);
        });
      break;
    }

    case login.SUBMIT_SIGNUP: {
      axios({
        method: "POST",
        url: `${url}/login`,
      })
        .then(({ data }) => {
          // console.log({ data });
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

export default user;
