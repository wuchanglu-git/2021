import {
  getHotSingerListRequest,
  getSingerListRequest,
} from "../../../api/request";
import actionTypes from "./constans";
import { fromJS } from "immutable";
import { CATEGORY_TYPES } from "../types";
const changeSingerList = (data: Array<any>) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data),
});

export const changePageCount = (data: number) => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data,
});
//进场loading
export const changeEnterLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
});

//滑动最底部loading
export const changePullUpLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data,
});

//顶部下拉刷新loading
export const changePullDownLoading = (data: boolean) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data,
});

//第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch: any) => {
    getHotSingerListRequest(0)
      .then((res: any) => {
        const data = res.artists;
        dispatch(changeSingerList(data));
        dispatch(changeEnterLoading(false));
        dispatch(changePullDownLoading(false));
      })
      .catch(() => {
        console.log("热门歌手数据获取失败");
      });
  };
};

//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch: any, getState: any) => {
    const pageCount = getState().getIn(["singers", "pageCount"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    getHotSingerListRequest(pageCount)
      .then((res: any) => {
        const data = [...singerList, ...res.artists];
        dispatch(changeSingerList(data));
        dispatch(changePullUpLoading(false));
      })
      .catch(() => {
        console.log("热门歌手数据获取失败");
      });
  };
};

//第一次加载对应类别的歌手
export const getSingerList = (category: CATEGORY_TYPES, alpha: string) => {
  return (
    dispatch: (arg0: { type: actionTypes; data: any }) => void,
    getState: any
  ) => {
    getSingerListRequest(category, alpha, 0)
      .then((res: any) => {
        const data = res.artists;
        dispatch(changeSingerList(data));
        dispatch(changeEnterLoading(false));
        dispatch(changePullDownLoading(false));
      })
      .catch(() => {
        console.log("歌手数据获取失败");
      });
  };
};

//加载更多歌手
export const refreshMoreSingerList = (category: CATEGORY_TYPES, alpha: string) => {
  return (
    dispatch: (arg0: { type: actionTypes; data: any }) => void,
    getState: () => {
      (): any;
      new (): any;
      getIn: {
        (arg0: string[]): {
          (): any;
          new (): any;
          toJS: { (): any; new (): any };
        };
        new (): any;
      };
    }
  ) => {
    const pageCount: any = getState().getIn(["singers", "pageCount"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    getSingerListRequest(category, alpha, pageCount)
      .then((res: any) => {
        const data = [...singerList, ...res.artists];
        dispatch(changeSingerList(data));
        dispatch(changePullUpLoading(false));
      })
      .catch(() => {
        console.log("歌手数据获取失败");
      });
  };
};
