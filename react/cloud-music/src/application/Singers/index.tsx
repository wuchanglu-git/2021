import { useCallback, memo, useEffect, useContext } from 'react'
import HorizenItem from '../../components/HorizenItem'
import { categoryTypes, alphaTypes } from '../../api/config'
import { CATEGORY_TYPES } from './types'
import { List, ListContainer, ListItem, NavContainer } from './style'
import Scroll from '../../components/Scroll';
import Loading from '../../components/Loading'
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
import LazyLoad, { forceCheck } from 'react-lazyload'
import MusicSvg from '../../assets/icon/music.svg'
import { CategoryDataContext, CHANGE_ALPHA, CHANGE_CATEGORY } from './data'
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
                            <LazyLoad placeholder={<img width="100%" height="100%" src={MusicSvg} alt="music" />}>
                                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                            </LazyLoad>
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
        const { data, dispatch } = useContext(CategoryDataContext) as any
        const { category, alpha } = data.toJS()
        const handleUpdateCatetory = useCallback((key) => {
            const cat = categoryTypes.find(item => {
                return item.key === key
            })
            if (cat) {
                dispatch({ type: CHANGE_CATEGORY, data: cat })
                updateDispatch(cat, alpha)
            }
        }, [dispatch, alpha, updateDispatch])
        const handleUpdateAlpha = useCallback((val) => {
            dispatch({ type: CHANGE_ALPHA, data: val })
            updateDispatch(category, val)
        }, [dispatch, category, updateDispatch])
        useEffect(() => {
            if (!singerList.size) {
                getHotSingerDispatch()
            }
        }, [getHotSingerDispatch,singerList.size])
        const handlePullUp = () => {
            pullUpRefreshDispatch(category, alpha, category.key === '', pageCount);
        };

        const handlePullDown = () => {
            pullDownRefreshDispatch(category, alpha);
        };
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
                    <Scroll pullUpLoading={pullUpLoading}
                        pullDownLoading={pullDownLoading}
                        pullUp={handlePullUp}
                        pullDown={handlePullDown}
                        onScroll={forceCheck}>
                        {renderSingerList(singerListJS)}
                    </Scroll>
                    {enterLoading && <Loading></Loading>}
                </ListContainer>
            </div>
        )
    })
)
// 页面切换还留下category和alpha状态的方式我想到了两种
// 1.存sessionstorage
// 2.提取到redux上