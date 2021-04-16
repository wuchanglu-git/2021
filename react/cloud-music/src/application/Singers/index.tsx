import React, { useState, useCallback } from 'react'
import HorizenItem from '../../components/HorizenItem'
import { categoryTypes, alphaTypes } from '../../api/config'
import { List, ListContainer, ListItem, NavContainer } from './style'
import Scroll from '../../components/Scroll';
//mock 数据
const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
    return {
        picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
        name: "隔壁老樊",
        accountId: 277313426,
    }
});
const renderSingerList = () => {
    return (
        <List>
            {
                singerList.map((item, index) => {
                    return (<ListItem key={index}>
                        <div className="img_wrapper">
                            <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                        </div>
                        <span className="name">{item.name}</span>
                    </ListItem>)
                })
            }
        </List>
    )
}
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
        <div>
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
            <ListContainer>
                <Scroll>
                    {renderSingerList()}
                </Scroll>
            </ListContainer>
        </div>
    )
}