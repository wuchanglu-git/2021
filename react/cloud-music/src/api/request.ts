import { axiosInstance } from "./config";
export const getBannerRequest = () => {
  return axiosInstance("/banner");
};
export const getRecommendListRequest = () => {
  return axiosInstance("/personalized");
};
