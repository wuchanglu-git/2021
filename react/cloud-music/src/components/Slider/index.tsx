import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
type BannerItemType = {
    imageUrl: string
}
type PropsValue = {
    bannerList: Array<BannerItemType>
}
export default function Slider(props: PropsValue) {
    const [sliderSwiper, setSliderSwiper] = useState(null)
    const { bannerList } = props
    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: { el: '.swiper-pagination' },
            })
            setSliderSwiper(newSliderSwiper as unknown as null)
        }
    }, [bannerList.length, sliderSwiper])
    return (
        <SliderContainer>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        bannerList.map((slider, index) => {
                            return (
                                <div className="swiper-slide" key={slider.imageUrl + index}>
                                    <div className="slider-nav">
                                        <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="before"></div>
        </SliderContainer>
    )
}