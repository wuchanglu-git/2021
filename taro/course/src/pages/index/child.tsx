import React from 'react'
import { View, Text } from '@tarojs/components'
function Child(props) {
    console.log(props)
    return <View>{props.children}</View>
}
export default Child