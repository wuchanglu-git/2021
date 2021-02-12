import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import './section3.scss'
import pic1 from '../../../images/index/1.png'
import pic2 from '../../../images/index/2.png'
import pic3 from '../../../images/index/3.png'
const LIST = [
    { picSrc: pic1, text: '发布您的需求' },
    { picSrc: pic2, text: '查看推荐' },
    { picSrc: pic3, text: '选择服务商' },
]
function Section3() {
    return <View className='section3'>
        <Text className='section3__title'>三步找到最合适服务商</Text>
        <View className='section3__list'>
            {LIST.map((item, index) => {
                return <View className='list__item' key={index}>
                    <Image className='img' src={item.picSrc} />
                    <View className='view'>{item.text}</View>
                </View>
            })}
        </View>
    </View>
}
export default Section3