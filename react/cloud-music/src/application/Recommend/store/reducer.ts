import * as actionTypes from "./constans";
import { fromJS } from "immutable";
const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
});

const reducer = (state = defaultState, action: { type: string; data: any }) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data);
    default:
      return state;
  }
};
export default reducer;
