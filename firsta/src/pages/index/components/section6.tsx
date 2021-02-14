import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import './section6.scss'
import bg4 from '../../../images/index/bg4.png'
import LinkButton from '../../../component/LinkButton'
const TITLE1 = '来FIRSTA,'
const TITLE2 = '寻找更多工作机会'
const LABEL1 = '入驻firsta，每天为您推荐5个新需求，'
const LABEL2 = '来firsta寻找更多的工作机会。'
function Section6() {
    return <View className='section6'>
        <Image src={bg4} className='section6__bg' />
        <View className='section6__title'>{TITLE1}</View>
        <View className='section6__title'>{TITLE2}</View>
        <View className='section6__border'></View>
        <View className='section6__label'>{LABEL1}</View>
        <View className='section6__label'>{LABEL2}</View>
        <View className='section6__nav'>
            <LinkButton context='入驻平台' />
        </View>
    </View>
}
export default Section6