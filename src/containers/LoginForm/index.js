import { connect } from "react-redux";

// COMPONENT
import LoginFormComponent from "../../components/LoginForm";

// ACTIONS
import action from "../../actions/LoginForm/actionCreators";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (event, datas) => {
    event.preventDefault();
    dispatch(action.submitLogin(datas));
  },
});

export const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
