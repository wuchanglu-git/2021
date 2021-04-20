import {fromJS} from 'immutable'
import { getRankListRequest } from "../../../api/request";
import { CHANGE_RANK_LIST, CHANGE_LOADING } from "./constants";

const changeRankList = (data: any) => ({
  type: CHANGE_RANK_LIST,
  data: fromJS(data),
});
const changeLoading = (data: boolean) => ({
  type: CHANGE_LOADING,
  data,
});
export const getRankList = () => {
  return (dispatch: (arg0: { type: string; data: any }) => void) => {
    getRankListRequest().then((data: any) => {
      let list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    });
  };
};
