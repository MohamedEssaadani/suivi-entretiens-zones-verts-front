import {
  ASSIGNMENTS_LIST_FAIL,
  ASSIGNMENTS_LIST_REQUEST,
  ASSIGNMENTS_LIST_SUCCESS,
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

const assignmentsReducer = (state = { assignments: [] }, action) => {
  switch (action.type) {
    case ASSIGNMENTS_LIST_REQUEST:
      return { loading: true };

    case ASSIGNMENTS_LIST_SUCCESS:
      return { loading: false, assignments: action.payload };

    case ASSIGNMENTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { assignTaskReducer, assignmentsReducer };
