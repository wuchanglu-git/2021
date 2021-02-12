import React, { } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './section2.scss'
import star from '../../../images/index/star.png'
function Section2() {
    return <View className='section2'>
        <Text className='section2__title'>真实可靠的评分体系</Text>
        <View className='section2__start'>
            <Start total={5} value={5} />
        </View>
        <Text className='section2__label'>firsta全平台无广告，保证评分真实性！</Text>
    </View>
}
interface StartProps {
    total: number, value: number
}
function Start(props: StartProps) {
    const { total, value } = props
    return <View className='com_star'>
        {
            (new Array(total)).fill(1).map((_item, index) => {
                return <Image className='com_star-pic' src={(index + 1) > value ? '' : star} key={index} />
            })
        }

    </View>
}
export default Section2