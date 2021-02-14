import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import './section4.scss'
import EvaluateCard from '../../../component/EvaluateCard'
const MOCK_LIST = [
    {
        id: 1,
        avator: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg',
        name: '浙江道挺信息有限公司',
        feedback: 64,
        percent: 90,
        star: 5,
        totalStar: 5,
        context: '找他们做了一个陌生人交友APP，总耗时3个月。开发人员技术都很好，目前已上线…',
        userName: 'Nick Jam',
    },
    {
        id: 2,
        avator: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg',
        name: '浙江道挺信息有限公司',
        feedback: 64,
        percent: 90,
        star: 5,
        totalStar: 5,
        context: '找他们做了一个陌生人交友APP，总耗时3个月。开发人员技术都很好，目前已上线…',
        userName: 'Nick Jam',
    },
    {
        id: 3,
        avator: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1441836571,2166773131&fm=26&gp=0.jpg',
        name: '浙江道挺信息有限公司',
        feedback: 64,
        percent: 90,
        star: 5,
        totalStar: 5,
        context: '找他们做了一个陌生人交友APP，总耗时3个月。开发人员技术都很好，目前已上线…',
        userName: 'Nick Jam',
    }
]
function Section4() {
    return <View className='section4'>
        <View className='section4__title'>
            来自需求方的评价
        </View>
        <View className='section4__wrapper'>
            <View className='section4__list'>
                {MOCK_LIST.map((item, index) => {
                    return <View key={item.id} className={index !== 0 ? 'section4__normal-card' : ''}><EvaluateCard {...item} /></View>
                })}
            </View>
        </View>
    </View>
}

export default Section4