import LazyLoad from 'react-lazyload'
import { getCount } from '../../api/utils'
import {
    ListWrapper,
    ListItem,
    List
} from './style'
import MusicSvg from '../../assets/icon/music.svg'
type RecommendTYpe = {
    id: number | string
    picUrl: string
    playCount: number
    name: string
}
type PropsValues = {
    recommendList: Array<RecommendTYpe>
    clickHandle: (data: RecommendTYpe) => void
}
export default function RecommendList(props: PropsValues) {
    const { recommendList } = props
    const { clickHandle } = props
    return (
        <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
                {
                    recommendList.map((item, index) => {
                        return (
                            <ListItem key={item.id} onClick={() => clickHandle(item)}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    {/* 加此参数可以减小请求的图片资源大小 */}
                                    {/* img 标签外部包裹一层 LazyLoad */}
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={MusicSvg} alt="music" />}>
                                        <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                                    </LazyLoad>
                                    <div className="play_count">
                                        <img className="icon" src={MusicSvg} alt="" />
                                        <span className="count">{getCount(item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )
}
