const pages=[
    'pages/index/index',
    'pages/me/index',
    'pages/list/index'
  ]
export default {
  pages ,
  tabBar:{
    list:[
      {
        pagePath:pages[0],
        text:'首页'
      },
      {
        pagePath:pages[1],
        text:'我的'
      },
      {
        pagePath:pages[2],
        text:'列表'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
