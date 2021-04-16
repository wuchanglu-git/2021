import * as actionTypes from "./constans";
import { fromJS } from "immutable";
import {
  getBannerRequest,
  getRecommendListRequest,
} from "../../../api/request";
export const changeBannerList = (data: Array<any>) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data),
});
export const changeRecommendList = (data: Array<any>) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
});
export const getBannerList = () => {
  return (dispatch: (arg0: { type: string; data: any }) => void) => {
    getBannerRequest()
      .then((data: any) => {
        dispatch(changeBannerList(data.banners));
      })
      .catch((err) => {
        console.log("轮播图数据传输错误");
      });
  };
};
export const getRecommendList = () => {
  return (dispatch: (arg0: { type: string; data: any }) => void) => {
    getRecommendListRequest()
      .then((data: any) => {
        dispatch(changeRecommendList(data.result));
      })
      .catch(() => {
        console.log("推荐歌单数据传输错误");
      });
  };
};
