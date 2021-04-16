import React, { useState, useContext, useCallback } from 'react'

const context = React.createContext({
    name: '张三',
    gae: 18
})
export default function HookContext() {
    const [data, setData] = useState({ name: '李四', age: 21 })
    const clickHandle = useCallback(() => {
        setData({ ...data, age: ++data.age })
    }, [data])
    return (
        <context.Provider value={data}>
            <button onClick={clickHandle}>增加年纪</button>
            <Child></Child>
        </context.Provider>
    )
}

function Child() {
    const ctx = useContext(context)
    return <h1>
        名字：{ctx.name}
        年纪：{ctx.age}
    </h1>
}