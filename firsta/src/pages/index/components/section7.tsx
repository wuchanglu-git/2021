import React from 'react'
import { View, Text,Button } from '@tarojs/components'
import './section7.scss'
const QUESTION_LIST = [
    '1：如何更详细地描述您的需求？',
    '2：一般的服务流程是怎样的？',
    '3：与服务商合同需要注意的几个点？',
    '4：部分需求的行业均价？',
    '5：我想做一个类似**的软件？',
    '……'
]
const LABEL = '常见问题咨询：'
function Section7() {
    return <View className='section7'>
        <Text className='section7__label'>{LABEL}</Text>
        <View className='section7__list'>
            {QUESTION_LIST.map(item => {
                return <Text className='section7__question' key={item}>{item}</Text>
            })}
        </View>
        <View className='section7__bottom'>
            <Button className='section7__button'>立即咨询</Button>
        </View>
    </View>
}
export default Section7