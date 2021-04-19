import React, { useState, useCallback, memo, useEffect } from 'react'
import HorizenItem from '../../components/HorizenItem'
import { categoryTypes, alphaTypes } from '../../api/config'
import { CATEGORY_TYPES } from './types'
import { List, ListContainer, ListItem, NavContainer } from './style'
import Scroll from '../../components/Scroll';
import {
    getSingerList,
    getHotSingerList,
    changeEnterLoading,
    changePageCount,
    refreshMoreSingerList,
    changePullDownLoading,
    changePullUpLoading,
    refreshMoreHotSingerList
} from './store/actionCreator'
import { connect } from 'react-redux'
//mock 数据
const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
    return {
        picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
        name: "隔壁老樊",
        accountId: 277313426,
    }
});
type SingerTypes = {
    picUrl: string,
    name: string,
    accountId: number
}
const renderSingerList = (singerList: Array<SingerTypes>) => {
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

const mapStateToProps = (state: { getIn: (arg0: string[]) => any; }) => ({
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount']),
})
const mapDispatchToProps = (dispatch: any) => {
    return {
        getHotSingerDispatch() {
            dispatch(getHotSingerList())
        },
        updateDispatch(category: CATEGORY_TYPES, alpha: string) {
            dispatch(changePageCount(0)) //改变了分类，页码清零
            dispatch(changeEnterLoading(true))
            dispatch(getSingerList(category, alpha))
        },
        //滑到最底部刷新部分的逻辑
        pullUpRefreshDispatch(category: CATEGORY_TYPES, alpha: string, hot: any, count: number) {
            dispatch(changePullUpLoading(true))
            dispatch(changePageCount(count + 1))
            if (hot) {
                dispatch(refreshMoreHotSingerList())
            } else {
                dispatch(refreshMoreSingerList(category, alpha))
            }
        },
        //顶部下拉刷新
        pullDownRefreshDispatch(category: any, alpha: string) {
            dispatch(changePullDownLoading(true));
            dispatch(changePageCount(0));//属于重新获取数据
            if (category.key === '' && alpha === '') {
                dispatch(getHotSingerList());
            } else {
                dispatch(getSingerList(category, alpha));
            }
        }
    }
}
export const Singers = connect(mapStateToProps, mapDispatchToProps)(
    memo(function Singers(props: any) {
        const {
            singerList,
            enterLoading,
            pullUpLoading,
            pullDownLoading,
            pageCount
        } = props
        const {
            getHotSingerDispatch,
            updateDispatch,
            pullUpRefreshDispatch,
            pullDownRefreshDispatch
        } = props
        const singerListJS = singerList ? singerList.toJS() : []
        const [category, setCategory] = useState({ name: '', key: '', type: 'type' })
        const handleUpdateCatetory = useCallback((key) => {
            const cat = categoryTypes.find(item => {
                return item.key === key
            })
            if (cat) { setCategory(cat) }
        }, [])
        const [alpha, setAlpha] = useState('')
        const handleUpdateAlpha = useCallback((val) => {
            setAlpha(val)
        }, [])
        useEffect(() => {
            updateDispatch(category, alpha)
        }, [category, alpha])
        useEffect(() => {
            getHotSingerDispatch()
        }, [])
        return (
            <div>
                <NavContainer>
                    <HorizenItem
                        list={categoryTypes}
                        title={"分类 (默认热门):"}
                        handleClick={handleUpdateCatetory}
                        oldVal={category.key}></HorizenItem>
                    <HorizenItem
                        list={alphaTypes}
                        title={"首字母:"}
                        handleClick={handleUpdateAlpha}
                        oldVal={alpha}></HorizenItem>
                </NavContainer>
                <ListContainer>
                    <Scroll >
                        {renderSingerList(singerListJS)}
                    </Scroll>
                </ListContainer>
            </div>
        )
    })
)