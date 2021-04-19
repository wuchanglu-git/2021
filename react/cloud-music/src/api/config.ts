import axios from "axios";
export const baseUrl = "http://localhost:8888";

//axios的实例拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl,
});
axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "网络错误");
  }
);
export { axiosInstance };

// 歌手种类
export const categoryTypes = [
  { name: "男歌手", key: "1", type: "type" },
  { name: "女歌手", key: "2", type: "type" },
  { name: "乐队", key: "3", type: "type" },
  { name: "华语", key: "7", type: "area" },
  { name: "欧美", key: "96", type: "area" },
  { name: "日本", key: "8", type: "area" },
  { name: "韩国", key: "16", type: "area" },
  { name: "其它", key: "0", type: "area" },
];

// 歌手首字母
export const alphaTypes = [
  {
    key: "A",
    name: "A",
  },
  {
    key: "B",
    name: "B",
  },
  {
    key: "C",
    name: "C",
  },
  {
    key: "D",
    name: "D",
  },
  {
    key: "E",
    name: "E",
  },
  {
    key: "F",
    name: "F",
  },
  {
    key: "G",
    name: "G",
  },
  {
    key: "H",
    name: "H",
  },
  {
    key: "I",
    name: "I",
  },
  {
    key: "J",
    name: "J",
  },
  {
    key: "K",
    name: "K",
  },
  {
    key: "L",
    name: "L",
  },
  {
    key: "M",
    name: "M",
  },
  {
    key: "N",
    name: "N",
  },
  {
    key: "O",
    name: "O",
  },
  {
    key: "P",
    name: "P",
  },
  {
    key: "Q",
    name: "Q",
  },
  {
    key: "R",
    name: "R",
  },
  {
    key: "S",
    name: "S",
  },
  {
    key: "T",
    name: "T",
  },
  {
    key: "U",
    name: "U",
  },
  {
    key: "V",
    name: "V",
  },
  {
    key: "W",
    name: "W",
  },
  {
    key: "X",
    name: "X",
  },
  {
    key: "Y",
    name: "Y",
  },
  {
    key: "Z",
    name: "Z",
  },
];
