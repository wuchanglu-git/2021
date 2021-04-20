import { axiosInstance } from "./config";
export const getBannerRequest = () => {
  return axiosInstance("/banner");
};
export const getRecommendListRequest = () => {
  return axiosInstance("/personalized");
};
export const getHotSingerListRequest = (count: number) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
};
export const getSingerListRequest = (
  category: { type: string; key: string },
  alpha: string,
  count: number
) => {
  const { type = "", key = "" } = category;
  return axiosInstance.get(
    `/artist/list?${type}=${key}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
export const getRankListRequest = () => {
  return axiosInstance.get("/toplist/detail");
};
