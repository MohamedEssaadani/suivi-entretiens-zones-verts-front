import axios from "axios";
import {
  TACHES_LIST_FAIL,
  TACHES_LIST_REQUEST,
  TACHES_LIST_SUCCESS,
} from "../constants/TachesConstants";

const listTaches = () => async (dispatch) => {
  try {
    dispatch({
      type: TACHES_LIST_REQUEST,
    });

    const { data } = await axios.get("http://localhost:8080/taches");

    dispatch({
      type: TACHES_LIST_SUCCESS,
      payload: data._embedded.taches,
    });
  } catch (error) {
    dispatch({
      type: TACHES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { listTaches };
