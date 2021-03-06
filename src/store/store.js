import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  zoneVertsReducer,
  zoneVertsTotalReducer,
} from "../reducers/ZonesVertsReducers";
import {
  personnelReducer,
  personnelsListReducer,
  personnelsListTotalReducer,
} from "../reducers/PersonnelsReducers";
import { listTachesReducer } from "../reducers/TachesReducers";
import {
  assignmentsReducer,
  assignTaskReducer,
} from "../reducers/AffectationsReducers";
import { TypeZonesVertsReducer } from "../reducers/TypeZonesVertsReducers";

const reducer = combineReducers({
  zonesVerts: zoneVertsReducer,
  typeZoneVerts: TypeZonesVertsReducer,
  zoneVertsTotal: zoneVertsTotalReducer,
  personnels: personnelsListReducer,
  personnelsTotal: personnelsListTotalReducer,
  personnel: personnelReducer,
  taches: listTachesReducer,
  affectation: assignTaskReducer,
  assignments: assignmentsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
