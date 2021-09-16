import { connect } from "react-redux";

// COMPONENT
import QuestionComponent from "../../components/JoinUs/Questions";

// ACTIONS
import action from "../../actions/Restaurant/actionCreators";
import generalAction from "../../actions/Generals/actionCreators";

const mapStateToProps = (state) => ({
  loader: state.generalReducer.loader,
});

const mapDispatchToProps = (dispatch) => ({
  // Create restaurant
  create: (datas) => {
    dispatch(action.create(datas));
  },

  toggleLoader: () => {
    dispatch(generalAction.toggleLoader());
  },
});

export const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent);
