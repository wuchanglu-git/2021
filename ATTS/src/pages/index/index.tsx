import React, { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'
import './index.less'
import {navigateTo} from '@tarojs/taro'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.onButtonClick=this.onButtonClick.bind(this)
  }
  onButtonClick(){
    navigateTo({
      url:'/pages/my/index'
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {onButtonClick}=this
    return (
      <View className='index'>
        <Text>index</Text>
        <Button onClick={onButtonClick}>点击跳转</Button>
      </View>
    )
  }
}
