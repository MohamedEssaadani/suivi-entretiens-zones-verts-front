import axios from "axios";
import {
  CREATE_ZONE_VERT_FAIL,
  CREATE_ZONE_VERT_REQUEST,
  CREATE_ZONE_VERT_SUCCESS,
  GET_ZONES_VERTS_TOTAL_FAIL,
  GET_ZONES_VERTS_TOTAL_REQUEST,
  GET_ZONES_VERTS_TOTAL_SUCCESS,
  ZONES_VERTS_LIST_FAIL,
  ZONES_VERTS_LIST_REQUEST,
  ZONES_VERTS_LIST_SUCCESS,
} from "../constants/ZoneVertsConstants";

const listZonesVerts = () => async (dispatch) => {
  try {
    dispatch({
      type: ZONES_VERTS_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "http://localhost:8080/zoneVerts?projection=zoneVertProjection"
    );

    dispatch({
      type: ZONES_VERTS_LIST_SUCCESS,
      payload: data._embedded.zoneVerts,
    });
  } catch (error) {
    dispatch({
      type: ZONES_VERTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const listZonesVertsTotal = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ZONES_VERTS_TOTAL_REQUEST,
    });

    const { data } = await axios.get("http://localhost:8080/zoneVerts");

    dispatch({
      type: GET_ZONES_VERTS_TOTAL_SUCCESS,
      payload: data.page.totalElements,
    });
  } catch (error) {
    dispatch({
      type: GET_ZONES_VERTS_TOTAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const createZoneVert = (zoneVert) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ZONE_VERT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:8080/zoneVerts",
      zoneVert,
      config
    );

    dispatch({
      type: CREATE_ZONE_VERT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ZONE_VERT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export { listZonesVerts, createZoneVert, listZonesVertsTotal };
