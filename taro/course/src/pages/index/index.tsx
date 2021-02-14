import React, { Component, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Child from './child'

function Index() {
  const [text, setText] = useState('Hello world!')
  const clickHandle = () => {
    setText((val: string) => {
      return val === 'Hello world!' ? '123' : 'Hello world!'
    })
  }
  return (
    <View className='index'>
      <Button onClick={clickHandle}>点我</Button>
      <Child name='名字'>
        <Text>{text}</Text>
      </Child>
    </View>
  )
}
export default Index