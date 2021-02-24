// 使用ProvidePlugin可以避免多个地方使用某个依赖，然后多次引用，
// 并且引入之后的名称不能保证每次都一致的
// 使用之后全剧直接使用那个名称就可以了，既方便又统一
export function showMoment() {
  console.log("moment--js");
  console.log($moment());
}

export function test() {
  console.log("我是测试js tree shaking的输出");
}
