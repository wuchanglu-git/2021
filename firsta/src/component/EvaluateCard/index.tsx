import React from 'react'
import { View,Text,Image } from "@tarojs/components"
import Star from '../star/star'
import './style.scss'

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
export default EvaluateCard