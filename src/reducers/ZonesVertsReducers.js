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

export const zoneVertsReducer = (state = { zonesVerts: [] }, action) => {
  switch (action.type) {
    case ZONES_VERTS_LIST_REQUEST:
      return { loading: true, zonesVerts: [] };

    case ZONES_VERTS_LIST_SUCCESS:
      return { loading: false, zonesVerts: action.payload };

    case ZONES_VERTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get personnels total elements
export const zoneVertsTotalReducer = (
  state = { totalZonesVerts: 0 },
  action
) => {
  switch (action.type) {
    case GET_ZONES_VERTS_TOTAL_REQUEST:
      return { loading: true, totalZonesVerts: 0 };

    case GET_ZONES_VERTS_TOTAL_SUCCESS:
      return { loading: false, totalZonesVerts: action.payload };
    case GET_ZONES_VERTS_TOTAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const createZoneVertReducer = (state = { zoneVert: {} }, action) => {
  switch (action.type) {
    case CREATE_ZONE_VERT_REQUEST:
      return { loading: true };

    case CREATE_ZONE_VERT_SUCCESS:
      return { loading: false, zoneVert: action.payload };

    case CREATE_ZONE_VERT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
