import React, { useRef, useEffect } from 'react'
import Slider from '../../components/Slider'
import RecommendList from '../../components/List'
import Scroll from '../../components/Scroll';
import { Content } from './style';
import { connect } from "react-redux";
import * as actionTypes from './store/actionCreator';
const mapStateToProps = (state: { getIn: (arg0: string[]) => any; }) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList'])
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
        const { bannerList, recommendList } = props
        const { getBannerDataDispatch, getRecommendListDataDispatch } = props
        const scrollRef = useRef();
        const bannerListJS = bannerList ? bannerList.toJS() : [];
        const recommendListJS = recommendList ? recommendList.toJS() : [];
        useEffect(() => {
            getBannerDataDispatch()
            getRecommendListDataDispatch()
        }, [getBannerDataDispatch, getRecommendListDataDispatch])
        return (
            <Content>
                <Scroll ref={scrollRef as any}>
                    <div>
                        <Slider bannerList={bannerListJS}></Slider>
                        <RecommendList recommendList={recommendListJS}></RecommendList>
                    </div>
                </Scroll>
            </Content>
        )
    })
)
