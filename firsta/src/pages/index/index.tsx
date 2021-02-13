import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </View>
    )
  }
}
