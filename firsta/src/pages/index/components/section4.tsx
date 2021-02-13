import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import Star from '../../../component/star'
import './section4.scss'
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
interface EvaluateCardProps {
    avator: string,
    name: string,
    feedback: number,
    percent: number,
    star: number,
    totalStar: number,
    context?: string,
    userName: string
}
function EvaluateCard(props: EvaluateCardProps) {
    const { avator,
        name,
        feedback,
        percent,
        star,
        totalStar,
        context,
        userName } = props
    return (
        <View className='com_evaluate-card'>
            <Image className='com_ec-avator' src={avator}></Image>
            <Text className='com_ec-name'>{name}</Text>
            <Text className='com_ec-message'>{feedback}个反馈，{percent}%好评</Text>
            <View className='com_ec-border'></View>
            <View className='com_ec-star'><Star total={totalStar} value={star} size={16}/></View>
            <Text className='com_ec-context'>{context}</Text>
            <Text className='com_ec-label'>来自：{userName}</Text>
        </View>
    )
}
export default Section4