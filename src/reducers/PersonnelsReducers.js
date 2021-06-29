import {
  GET_PERSONNEL_BY_ID_FAIL,
  GET_PERSONNEL_BY_ID_REQUEST,
  GET_PERSONNEL_BY_ID_SUCCESS,
  PERSONNELS_LIST_FAIL,
  PERSONNELS_LIST_REQUEST,
  PERSONNELS_LIST_SUCCESS,
} from "../constants/PersonnelsConstants";

const personnelsListReducer = (state = { personnels: [] }, action) => {
  switch (action.type) {
    case PERSONNELS_LIST_REQUEST:
      return { loading: true, personnels: [] };

    case PERSONNELS_LIST_SUCCESS:
      return { loading: false, personnels: action.payload };

    case PERSONNELS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//Single Personnel
const personnelReducer = (state = { personnel: {} }, action) => {
  switch (action.type) {
    case GET_PERSONNEL_BY_ID_REQUEST:
      return { loading: true, personnel: {} };

    case GET_PERSONNEL_BY_ID_SUCCESS:
      return { loading: false, personnel: action.payload };

    case GET_PERSONNEL_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const createPersonnelReducer = (state = { personnel: {} }, action) => {
  switch (action.type) {
    case PERSONNELS_LIST_REQUEST:
      return { loading: true };

    case PERSONNELS_LIST_SUCCESS:
      return { loading: false, personnel: action.payload };

    case PERSONNELS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { personnelsListReducer, createPersonnelReducer, personnelReducer };
