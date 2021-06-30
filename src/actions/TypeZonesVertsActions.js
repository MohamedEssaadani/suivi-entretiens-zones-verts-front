import axios from "axios";
import {
  TYPE_ZONES_VERTS_FAIL,
  TYPE_ZONES_VERTS_REQUEST,
  TYPE_ZONES_VERTS_SUCCESS,
} from "../constants/TypeZoneVertsConstants";

const listTypeZonesVerts = () => async (dispatch) => {
  try {
    dispatch({
      type: TYPE_ZONES_VERTS_REQUEST,
    });

    const { data } = await axios.get("http://localhost:8080/typeZoneVerts");

    dispatch({
      type: TYPE_ZONES_VERTS_SUCCESS,
      payload: data._embedded.typeZoneVerts,
    });
  } catch (error) {
    dispatch({
      type: TYPE_ZONES_VERTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { listTypeZonesVerts };
