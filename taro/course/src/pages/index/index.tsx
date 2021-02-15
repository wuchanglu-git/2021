import React, { Component, useState, useCallback } from 'react'
import { View, Text, Button } from '@tarojs/components'
import {navigateTo,redirectTo} from '@tarojs/taro'
import './index.less'
import Child from './child'

function Index() {
  const [text, setText] = useState('Hello world!')
  const clickHandle = () => {
    setText((val: string) => {
      return val === 'Hello world!' ? '123' : 'Hello world!'
    })
  }
  const navButtonClick=useCallback(()=>{
    navigateTo({
      url:'/pages/blog/index?navigationType=navigateTo'
    })
  },[])
  const redirectButtonClick=useCallback(()=>{
    redirectTo({
      url:'/pages/blog/index?navigationType=redirectTo'
    })
  },[])
  return (
    <View className='index'>
      <Button onClick={clickHandle}>点我</Button>
      <Child name='名字'>
        <Text>{text}</Text>
      </Child>
      <Button onClick={navButtonClick}>navigateTo</Button>
      <Button onClick={redirectButtonClick}>redirectTo</Button>
    </View>
  )
}
export default Index