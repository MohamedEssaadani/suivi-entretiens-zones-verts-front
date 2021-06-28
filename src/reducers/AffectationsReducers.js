import {
  ASSIGN_TASK_FAIL,
  ASSIGN_TASK_REQUEST,
  ASSIGN_TASK_SUCCESS,
} from "../constants/AffectationsConstants";

const assignTaskReducer = (state = { affectation: {} }, action) => {
  switch (action.type) {
    case ASSIGN_TASK_REQUEST:
      return { loading: true };

    case ASSIGN_TASK_SUCCESS:
      return { loading: false, affectation: action.payload };

    case ASSIGN_TASK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { assignTaskReducer };
