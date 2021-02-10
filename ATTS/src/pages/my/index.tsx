import React, { useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import './index.less'

function My() {
  useEffect(() => { console.log('useEffect') })
  useReady(() => { console.log('useReady') })
  useDidShow(() => { console.log('useDidShow') })
  useDidHide(() => { console.log('useDidHide') })
  usePullDownRefresh(() => { console.log('usePullDownRefresh') })
  return (
    <View>
      <Text>my</Text>
    </View>
  )
}
export default My
