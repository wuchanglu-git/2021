import { View } from '@tarojs/components'
import React, { useState } from 'react'
export default function List(){
    const [list,] = useState([1,2,3])
    return <View>
        {list.map(item=>{
            return <View key={item}>{item}{item>1?'-----aa':""}</View>
        })}
    </View>
}