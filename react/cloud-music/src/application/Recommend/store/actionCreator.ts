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
export const changeLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
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
        // 接口反应有点快，加个延迟好看到loading效果
        setTimeout(() => {
            dispatch(changeLoading(false))
        }, 500);
      })
      .catch(() => {
        console.log("推荐歌单数据传输错误");
      });
  };
};
