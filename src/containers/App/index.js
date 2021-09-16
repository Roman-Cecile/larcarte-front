import { connect } from "react-redux";

// COMPONENT
import AppComponent from "../../components/App/App";

// ACTIONS
// import action from "";

const mapStateToProps = (state) => ({
  isLogin: state.userReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
