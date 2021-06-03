import axios from "axios";
import {
  CREATE_PERSONNEL_FAIL,
  CREATE_PERSONNEL_REQUEST,
  CREATE_PERSONNEL_SUCCESS,
  PERSONNELS_LIST_FAIL,
  PERSONNELS_LIST_REQUEST,
  PERSONNELS_LIST_SUCCESS,
} from "../constants/PersonnelsConstants";

const listPersonnels = () => async (dispatch) => {
  try {
    dispatch({
      type: PERSONNELS_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "http://localhost:8080/personnels?sort=dateEmbauche,desc"
    );

    dispatch({
      type: PERSONNELS_LIST_SUCCESS,
      payload: data._embedded.personnels,
    });
  } catch (error) {
    dispatch({
      type: PERSONNELS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const createPersonnel = (personnel) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_PERSONNEL_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:8080/personnels",
      personnel,
      config
    );

    dispatch({
      type: CREATE_PERSONNEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PERSONNEL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { listPersonnels, createPersonnel };
