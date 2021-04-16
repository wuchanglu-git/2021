import React, { useState, useCallback } from 'react'
import HorizenItem from '../../components/HorizenItem'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer } from './style'
export function Singers() {
    const [category, setCategory] = useState('')
    const handleUpdateCatetory = useCallback((key) => {
        setCategory(key)
    }, [])
    const [alpha, setAlpha] = useState('')
    const handleUpdateAlpha = useCallback((val) => {
        setAlpha(val)
    }, [])
    return (
        <NavContainer>
            <HorizenItem
                list={categoryTypes}
                title={"分类 (默认热门):"}
                handleClick={handleUpdateCatetory}
                oldVal={category}></HorizenItem>
            <HorizenItem
                list={alphaTypes}
                title={"首字母:"}
                handleClick={handleUpdateAlpha}
                oldVal={alpha}></HorizenItem>
        </NavContainer>
    )
}