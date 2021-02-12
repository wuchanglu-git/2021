import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import './section1.scss'
import logo from '../../../images/index/logo.png'
import logo2 from '../../../images/index/logo2.png'
import jt from '../../../images/index/jiantou.png'
function Section1() {
    return (
        <View className='section1'>
            <Image src={logo2} className='section1__logo2' />
            <Image src={logo} className='section1__logo' />
            <Text className='section1__title'>快速找到靠谱服务商</Text>
            <Text className='section1__introduce' style='margin:0'>智能算法评估需求，推荐服务商，</Text>
            <Text className='section1__introduce'>能够在几分钟内为项目找到最合适的人</Text>
            <View className='section1__nav'>
                <View className='nav__button'>发布需求</View>
                <Image className='nav__icon' src={jt} />
            </View>
        </View>
    )
}
export default Section1