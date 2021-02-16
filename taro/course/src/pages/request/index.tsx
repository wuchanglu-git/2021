import { Button, View } from '@tarojs/components'
import React, { useCallback, useState } from 'react'
import { request } from '@tarojs/taro'
const SOURCE_URL = 'https://apiblog.jspang.com/default/getArticleList'
type ITEM_VALUES = {
    id: number,
    title: string
}
type LIST_VALUES = Array<ITEM_VALUES>
export default function Request() {
    const [data, setData] = useState<LIST_VALUES>([])
    const requestData = useCallback(() => {
        request({ url: SOURCE_URL,useStore:true }).then(res => {
            setData(res.data.list)
        })
    }, [])
    return <View>
        <Button onClick={requestData}>请求列表</Button>
        <View>下面是列表：</View>
        {data.map(item=>{
            return <View style={{fontSize:'18px'}} key={item.id}>{item.title}</View>
        })}
    </View>
}