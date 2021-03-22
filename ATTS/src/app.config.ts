const pages=[
    'pages/index/index',
    'pages/list/index',
    'pages/me/index',
    'pages/login/index',
    'pages/registe/index'
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
        text:'列表'
      },
      {
        pagePath:pages[2],
        text:'我的'
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
