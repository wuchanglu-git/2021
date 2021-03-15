import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Me extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='me'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
