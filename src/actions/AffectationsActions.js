import axios from "axios";
import {
  ASSIGN_TASK_FAIL,
  ASSIGN_TASK_REQUEST,
  ASSIGN_TASK_SUCCESS,
} from "../constants/AffectationsConstants";

const assignTask = (affectation) => async (dispatch) => {
  try {
    dispatch({
      type: ASSIGN_TASK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8080/affectations",
      affectation,
      config
    );

    dispatch({
      type: ASSIGN_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ASSIGN_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { assignTask };
