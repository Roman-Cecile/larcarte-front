import { connect } from "react-redux";

// COMPONENT
import userComponent from "../../components/User";

// ACTIONS
// import action from "";

const mapStateToProps = (state) => ({
  isLogin: state.userReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({});

export const User = connect(mapStateToProps, mapDispatchToProps)(userComponent);
