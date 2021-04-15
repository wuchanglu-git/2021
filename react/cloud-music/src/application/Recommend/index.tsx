import React, { useRef } from 'react'
import Slider from '../../components/Slider'
import RecommendList from '../../components/List'
import Scroll from '../../components/Scroll';
import { Content } from './style';
export const Recommend = React.memo(function Recommend() {
    //mock 数据
    const bannerList = [1, 2, 3, 4].map(item => {
        return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    });
    const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
        return {
            id: index,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 17171122,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
    });
    const scrollRef = useRef();
    return (
        <Content>
            <Scroll ref={scrollRef as any}>
                <div>
                    <Slider bannerList={bannerList}></Slider>
                    <RecommendList recommendList={recommendList}></RecommendList>
                </div>
            </Scroll>
        </Content>
    )
})
