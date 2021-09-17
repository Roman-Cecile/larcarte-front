import { connect } from "react-redux";

// COMPONENT
import userComponent from "../../components/User";

// ACTIONS
import userAction from "../../actions/User/actionCreators";

const mapStateToProps = (state) => ({
  isLogin: state.userReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(userAction.logOut());
  },
});

export const User = connect(mapStateToProps, mapDispatchToProps)(userComponent);
