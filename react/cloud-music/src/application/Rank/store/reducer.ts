import { fromJS } from "immutable";
import { CHANGE_LOADING, CHANGE_RANK_LIST } from "./constants";

const defaultState = fromJS({
  rankList: [],
  loading: true,
});
export const reducer = (
  state = defaultState,
  action: { type: string; data: any }
) => {
  const { type, data } = action;
  switch (type) {
    case CHANGE_LOADING:
      return state.set("loading", data);
    case CHANGE_RANK_LIST:
      return state.set("rankList", data);
    default:
      return state;
  }
};
