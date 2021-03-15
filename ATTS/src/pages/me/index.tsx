import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import  './index.scss'
import { NavListValues, NavItem, PropsValues, StateValues } from './types'

const NAV_LIST: NavListValues = [
  new NavItem('导航1', '/pages/list/index'),
  new NavItem('导航2', '/pages/index/index'),
  new NavItem('导航3', '/pages/me/index')
]
export default class Me extends Component<PropsValues, StateValues> {
  constructor(props) {
    super(props)
    this.state = {
      navList: NAV_LIST
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { navList } = this.state
    return (
      <View className='me'>
        <View className='header'>
          <Image className='header__avator' src=''/>
          <View className='header__login-btn'>点击登录</View>
        </View>
        <View className='main'>
          <AtList>
            {navList.map((item) =>
              <AtListItem title={item.name} key={item.url} arrow="right"></AtListItem>
            )}
          </AtList>
        </View>
        <AtButton className="button-danger-secondary" type='secondary'>退出登录</AtButton>
      </View>
    )
  }
}
