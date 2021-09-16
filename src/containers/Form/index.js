import { connect } from "react-redux";

// COMPONENT
import FormComponent from "../../components/Form";

// ACTIONS
import action from "../../actions/Form/actionCreators";

const mapStateToProps = (state) => ({
  isLogin: state.userReducer.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  submitSignin: (event, datas) => {
    event.preventDefault();
    dispatch(action.submitSignin(datas));
  },

  submitSignup: (event, datas) => {
    event.preventDefault();
    dispatch(action.submitSignup(datas));
  },
});

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
