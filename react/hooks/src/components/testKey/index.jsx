import React, { useState } from 'react'

export default function TestKey() {
    const [list, setList] = useState([1, 2, 3,4])
    const clickHandle= ()=>{
        setList([2,4])
    }
    return (
        <div onClick={clickHandle}>
            {
                list.map((item, index) => {
                    if (index % 2 === 0) {
                        return <p key={item}>{item}</p>
                    } else {
                        return <h1 key={item}>{item}</h1>
                    }
                })
            }
        </div>
    )
}
