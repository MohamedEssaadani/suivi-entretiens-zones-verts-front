import {
  TYPE_ZONES_VERTS_FAIL,
  TYPE_ZONES_VERTS_REQUEST,
  TYPE_ZONES_VERTS_SUCCESS,
} from "../constants/TypeZoneVertsConstants";

export const TypeZonesVertsReducer = (
  state = { typeZoneVerts: [] },
  action
) => {
  switch (action.type) {
    case TYPE_ZONES_VERTS_REQUEST:
      return { loading: true, typeZoneVerts: [] };

    case TYPE_ZONES_VERTS_SUCCESS:
      return { loading: false, typeZoneVerts: action.payload };

    case TYPE_ZONES_VERTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
