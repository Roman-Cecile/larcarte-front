import { connect } from "react-redux";

// COMPONENT
import QuestionComponent from "../../components/JoinUs/Questions";

// ACTIONS
import action from "../../actions/Restaurant/actionCreators";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  // Create restaurant
  create: (datas) => {
    dispatch(action.create(datas));
  },
});

export const Questions = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent);
