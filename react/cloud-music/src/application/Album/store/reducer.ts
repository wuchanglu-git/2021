import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import { REDUX_ACTION_TYPES } from "../../../types";
const defaultState = fromJS({
  currentAlbum: {},
  enterLoading: true,
});
const reducer = (state = defaultState, action: REDUX_ACTION_TYPES) => {
  const { type, data } = action;
  switch (type) {
    case actionTypes.CHANGE_CURRENT_ALBUM:
      return state.set("currentAlbum", data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set("enterLoading", data);
    default:
      return state;
  }
};
export default reducer