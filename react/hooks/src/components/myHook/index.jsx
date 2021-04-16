import React, { useState, useEffect } from 'react'
import {useOnlyUpdateEffect} from '../../hooks'
function useMyHook(id) {
    const [data, setData] = useState({ 1: 'a', 2: 'b' })
    useEffect(() => {
        setData({
            1: Math.random()
        })
        return () => {
            console.log(111)
        }
    }, [])
    return data[id]
}
export default function MyHook() {
    const [count, setCount] = useState(0)
    console.log(useMyHook(1))
    useOnlyUpdateEffect(()=>{
        console.log('我不应该一开始就被执行1')
    },[count])
    useOnlyUpdateEffect(()=>{
        console.log('我不应该一开始就被执行2')
    },[count])
    return (
        <div onClick={() => setCount(count + 1)}>
            MyHook:{count}
        </div>
    )
}
