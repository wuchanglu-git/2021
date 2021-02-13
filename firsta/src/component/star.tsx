import React from 'react'
import { View, Image } from '@tarojs/components'
import star from '../images/index/star.png'
import './star.scss'
interface StartProps {
    total: number, 
    value: number,
    size?:number
}
function Star(props: StartProps) {
    const { total, value,size } = props
    return <View className='com_star'>
        {
            (new Array(total)).fill(1).map((_item, index) => {
                return <Image className='com_star-pic' 
                src={(index + 1) > value ? '' : star} 
                key={index} 
                style={size?{
                    width:`${size}px`,
                    height:`${size}px`
                }:{}}/>
            })
        }

    </View>
}
export default Star