import {
  TACHES_LIST_FAIL,
  TACHES_LIST_REQUEST,
  TACHES_LIST_SUCCESS,
} from "../constants/TachesConstants";

const listTachesReducer = (state = { taches: [] }, action) => {
  switch (action.type) {
    case TACHES_LIST_REQUEST:
      return { loading: true, taches: [] };

    case TACHES_LIST_SUCCESS:
      return { loading: false, taches: action.payload };

    case TACHES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { listTachesReducer };
