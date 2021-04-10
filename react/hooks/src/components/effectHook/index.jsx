import React, { useState, useEffect } from 'react'

export default function EffectHook() {
    const [count, setCount] = useState(0)
    const [showChild, setShowChild] = useState(true)
    useEffect(() => {
        document.title = `你点击了${count}次`
        if (count > 20) {
            setShowChild(false)
        }
    }, [count])
    return (
        <div>
            <h1>点击了{count}次</h1>
            <button onClick={() => setCount(count + 1)}>点我</button>
            {showChild && <Child />}
        </div>
    )
}
function Child() {
    useEffect(() => {
        window.xxyy = 11
        return () => {
            console.log('我被销毁了哦')
            delete window.xxyy
        }
    }, [])
    return <h2>child</h2>
}