import React, { useRef, useEffect, useCallback } from 'react'
import { forceCheck } from 'react-lazyload'
import Slider from '../../components/Slider'
import RecommendList from '../../components/List'
import Scroll from '../../components/Scroll';
import { Content } from './style';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreator';
import Loading from '../../components/Loading';
import { renderRoutes } from 'react-router-config';
const mapStateToProps = (state: { getIn: (arg0: string[]) => any; }) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
    enterLoading: state.getIn(['recommend', 'enterLoading'])
})
const mapDispatchToProps = (dispatch: any) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList());
        },
    }
}
export const Recommend = connect(mapStateToProps, mapDispatchToProps)(
    React.memo(function Recommend(props: any) {
        const {history} = props
        const { bannerList, recommendList, enterLoading } = props
        const { getBannerDataDispatch, getRecommendListDataDispatch } = props
        const scrollRef = useRef();
        const bannerListJS = bannerList ? bannerList.toJS() : [];
        const recommendListJS = recommendList ? recommendList.toJS() : [];
        useEffect(() => {
            if (!bannerList.size) { getBannerDataDispatch() }
            if (!recommendList.size) { getRecommendListDataDispatch() }
        }, [getBannerDataDispatch, getRecommendListDataDispatch, bannerList.size, recommendList.size])
        const scrollHandle = useCallback(
            () => {
                forceCheck()
            },
            [],
        )
        const clickHandle=useCallback(
            (item: any)=>{
                // console.log(item,history)
                history.push(`/recommend/${item.id}`)
            },
            [history],
        )
        return (
            <Content>
                <Scroll ref={scrollRef as any} onScroll={scrollHandle}>
                    <div>
                        <Slider bannerList={bannerListJS}></Slider>
                        <RecommendList clickHandle={clickHandle} recommendList={recommendListJS}></RecommendList>
                    </div>
                </Scroll>
                {enterLoading && <Loading />}
                {renderRoutes(props.route.routes)}
            </Content>
        )
    })
)
