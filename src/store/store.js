import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { zoneVertsReducer } from "../reducers/ZonesVertsReducers";
import { personnelsListReducer } from "../reducers/PersonnelsReducers";

const reducer = combineReducers({
  zonesVerts: zoneVertsReducer,
  personnels: personnelsListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
