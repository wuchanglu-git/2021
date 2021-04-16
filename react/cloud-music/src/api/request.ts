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
  category: string,
  alpha: string,
  count: number
) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
