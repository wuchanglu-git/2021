import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import jt from '../../images/index/jiantou.png'
import './index.scss'
interface LinkButtonPropsValue{
    href?:string,
    context:string
}
function LinkButton(props:LinkButtonPropsValue) {
    const {context}=props
    return <View className='com__nav'>
        <View className='con-nav__button'>{context}</View>
        <Image className='con-nav__icon' src={jt} />
    </View>
}
export default LinkButton