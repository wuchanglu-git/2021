import React, { forwardRef, useState, useRef, useEffect, ForwardedRef, useImperativeHandle, useMemo } from 'react'
import BScroll from 'better-scroll'
import { PullDownLoading, PullUpLoading, ScrollContainer } from './style'
import LoadingV2 from '../../components/Loading-v2'
import Loading from '../Loading'
import { debounce } from '../../api/utils'
type PropsValues = {
    direction?: 'vertical' | 'horizental' // 滚动的方向
    click?: true // 是否支持点击
    refresh?: boolean// 是否刷新
    onScroll?: (scroll: any) => void // 滑动触发的回调函数
    pullUp?: () => void// 上拉加载逻辑
    pullDown?: () => void// 下拉加载逻辑
    pullUpLoading?: boolean// 是否显示上拉 loading 动画
    pullDownLoading?: boolean// 是否显示下拉 loading 动画
    bounceTop?: boolean// 是否支持向上吸顶
    bounceBottom?: boolean// 是否支持向下吸底
    children?: any
}
const Scroll = forwardRef((props: PropsValues, ref: ForwardedRef<HTMLDivElement>) => {
    const [bScroll, setBScroll] = useState(null as any)
    const scrollContaninerRef = useRef()
    const { direction, click, refresh, pullDownLoading, pullUpLoading, bounceTop, bounceBottom } = props
    const { onScroll, pullUp, pullDown } = props
    const pullUpDebounce = useMemo(() => {
        return debounce((pullUp || (() => { })), 500)
    }, [pullUp])
    const pullDownDebounce = useMemo(() => {
        return debounce(pullDown || (() => { }), 500)
    }, [pullDown])
    useEffect(() => {
        if (scrollContaninerRef.current) {
            const scroll = new BScroll(scrollContaninerRef.current as any, {
                scrollX: direction === "horizental",
                scrollY: direction === "vertical",
                probeType: 3,
                click: click,
                bounce: {
                    top: bounceTop,
                    bottom: bounceBottom
                }
            })
            setBScroll(scroll)
            return () => {
                setBScroll(null)
            }
        }
    }, [scrollContaninerRef, direction, click, bounceTop, bounceBottom])
    //每次重新渲染都要刷新实例，防止无法滑动:
    useEffect(() => {
        if (refresh && bScroll) {
            bScroll.refresh()
        }
    })
    //给实例绑定 scroll 事件
    useEffect(() => {
        if (!bScroll || !onScroll) return;
        bScroll.on("scroll", (scroll: any) => {
            onScroll(scroll)
        })
        return () => {
            bScroll.off('scroll');
        }
    }, [onScroll, bScroll])
    //上拉到底的判断，调用上拉刷新的函数
    useEffect(() => {
        if (!bScroll || !pullUpDebounce) return;
        bScroll.on('scrollEnd', () => {
            // 判断是否滑动到了底部
            if (bScroll.y <= bScroll.maxScrollY + 100) {
                pullUpDebounce();
            }
        });
        return () => {
            bScroll.off('scrollEnd');
        }
    }, [pullUpDebounce, bScroll]);
    //进行下拉的判断，调用下拉刷新的函数
    useEffect(() => {
        if (!bScroll || !pullDownDebounce) return;
        bScroll.on('touchEnd', (pos: any) => {
            // 判断用户的下拉动作
            if (pos.y > 50) {
                pullDownDebounce();
            }
        });
        return () => {
            bScroll.off('touchEnd');
        }
    }, [pullDownDebounce, bScroll]);
    useEffect(() => { }, [pullDownLoading, pullUpLoading])
    // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
    useImperativeHandle(ref, () => ({
        // 给外界暴露 refresh 方法
        refresh() {
            if (bScroll) {
                bScroll.refresh();
                bScroll.scrollTo(0, 0);
            }
        },
        // 给外界暴露 getBScroll 方法，提供 bs 实例
        getBScroll() {
            if (bScroll) {
                return bScroll;
            }
        }
    }) as any);
    const PullUpdisplayStyle = pullUpLoading ? { display: "" } : { display: "none" };
    const PullDowndisplayStyle = pullDownLoading ? { display: "" } : { display: "none" };
    return (
        <ScrollContainer ref={scrollContaninerRef as any}>
            {props.children}
            {/* 滑到底部加载动画 */}
            <PullUpLoading style={PullUpdisplayStyle}><Loading></Loading></PullUpLoading>
            {/* 顶部下拉刷新动画 */}
            <PullDownLoading style={PullDowndisplayStyle}><LoadingV2></LoadingV2></PullDownLoading>
        </ScrollContainer>
    )
})
Scroll.defaultProps = {
    direction: "vertical",
    click: true,
    refresh: true,
    onScroll: undefined,
    pullUpLoading: false,
    pullDownLoading: false,
    pullUp: undefined,
    pullDown: undefined,
    bounceTop: true,
    bounceBottom: true
}
export default Scroll