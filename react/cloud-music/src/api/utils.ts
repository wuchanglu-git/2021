export const getCount = (count: number) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};
// 防抖，核心思想就是多次连续触发我只会在最后一次的定时延迟后触发，否则就不断刷新重新等待
export const debounce = (func: () => void, delay: number) => {
  let timer: any;
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      //@ts-ignore
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  };
};
//处理数据，找出第一个没有歌名的排行榜的索引
export const filterIndex = (rankList: Array<{ tracks: string }>) => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};
