import React from 'react'
import { View, Text } from '@tarojs/components'
import './section5.scss'
const MOCK_LIST = [
    { text: 'APP开发', href: "'" },
    { text: '网站开发', href: "'" },
    { text: '智能ERP', href: "'" },
    { text: '微信小程序', href: "'" },
    { text: 'H5定制', href: "'" },
    { text: '智慧解决方案', href: "'" },
    { text: 'logo设计', href: "'" },
    { text: 'UI设计', href: "'" },
    { text: '包装设计', href: "'" },
    { text: '卡片设计', href: "'" },
    { text: '画册设计', href: "'" },
    { text: '宣传活动设计', href: "'" }
]
function Section5() {
    return <View className='section5'>
        <Text className='section5__title'>浏览热门需求分类</Text>
        <View className='section5__list'>
            {MOCK_LIST.map(({ text }) => {
                return <View className='section5__nav' key={text}>{text}</View>
            })}
        </View>
    </View>
}
export default Section5