import React, { } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Star from '../../../component/star'
import './section2.scss'
function Section2() {
    return <View className='section2'>
        <Text className='section2__title'>真实可靠的评分体系</Text>
        <View className='section2__start'>
            <Star total={5} value={5} />
        </View>
        <Text className='section2__label'>firsta全平台无广告，保证评分真实性！</Text>
    </View>
}

export default Section2