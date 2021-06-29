import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { zoneVertsReducer } from "../reducers/ZonesVertsReducers";
import {
  personnelReducer,
  personnelsListReducer,
} from "../reducers/PersonnelsReducers";
import { listTachesReducer } from "../reducers/TachesReducers";
import {
  assignmentsReducer,
  assignTaskReducer,
} from "../reducers/AffectationsReducers";

const reducer = combineReducers({
  zonesVerts: zoneVertsReducer,
  personnels: personnelsListReducer,
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
