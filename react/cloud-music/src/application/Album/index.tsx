import { useEffect, useRef, useState, memo, useCallback } from 'react'
import { Container, TopDesc, Menu, SongItem, SongList } from "./style"
import { CSSTransition } from 'react-transition-group'
import Header from './../../components/Header';
import Scroll from '../../components/Scroll'
import Loading from '../../components/Loading'
import { getName, getCount, isEmptyObject } from './../../api/utils';
import { getAlbumList, changeEnterLoading } from './store/actionCreators'
import { connect } from 'react-redux'
// 首先引入
import style from "../../assets/global-style"
export const HEADER_HEIGHT = 45;

type CURRENT_ALBUM_TYPES = {
    creator: {
        avatarUrl: string,
        nickname: string,
    },
    coverImgUrl: string,
    subscribedCount: number,
    name: string,
    tracks: Array<{
        name: string,
        ar: Array<{ name: string }>,
        al: {
            name: string
        }
    }>
}
const mapStateToProps = (state: { getIn: (arg0: string[]) => any }) => ({
    currentAlbum: state.getIn(['album', 'currentAlbum']),
    enterLoading: state.getIn(['album', 'enterLoading']),
})
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAlbumDataDispatch(id: number) {
            dispatch(changeEnterLoading(true));
            dispatch(getAlbumList(id));
        },
    }
}
export const Album = connect(mapStateToProps, mapDispatchToProps)(memo(function Album(props: any) {
    const { history, currentAlbum: currentAlbumImmutable, enterLoading } = props
    const id = props.match.params.id;
    const { getAlbumDataDispatch } = props
    const currentAlbum: CURRENT_ALBUM_TYPES = currentAlbumImmutable.toJS();
    const [showStatus, setShowStatus] = useState(true)
    const [title, setTitle] = useState("歌单");
    const [isMarquee, setIsMarquee] = useState(false)
    const headerEl = useRef()
    const handleBack = useCallback(
        () => {
            setShowStatus(false);
        },
        [setShowStatus],
    )
    const handleScroll = (pos: any) => {
        let minScrollY = -HEADER_HEIGHT;
        let percent = Math.abs(pos.y / minScrollY);
        let headerDom: any = headerEl.current || {};
        // 滑过顶部的高度开始变化
        if (pos.y < minScrollY) {
            headerDom.style.backgroundColor = style["theme-color"];
            headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
            setTitle(currentAlbum.name);
            setIsMarquee(true);
        } else {
            headerDom.style.backgroundColor = "";
            headerDom.style.opacity = 1;
            setTitle("歌单");
            setIsMarquee(false);
        }
    };
    const container: any = useRef();
    useEffect(() => {
        console.log('- 刚开始时的 class 为：', container.current.classList.toString());
        const observer = new MutationObserver(function () {
            console.log('然后 class 变更为：', container.current && container.current.classList.toString());
        });
        observer.observe(container.current, {
            attributes: true
        });
    }, []);
    useEffect(() => {
        getAlbumDataDispatch(id)
    }, [getAlbumDataDispatch, id])
    return (
        <CSSTransition
            in={showStatus}
            timeout={300}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={history.goBack}>
            <Container ref={container}>
                <Header ref={headerEl} isMarquee={isMarquee} title={title} handleClick={handleBack}></Header>
                {isEmptyObject(currentAlbum) ? null : <Scroll bounceTop={false} onScroll={handleScroll}>
                    <div>
                        <TopDesc background={currentAlbum.coverImgUrl}>
                            <div className="background">
                                <div className="filter"></div>
                            </div>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <img src={currentAlbum.coverImgUrl} alt="" />
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) / 10} 万 </span>
                                </div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="title">{currentAlbum.name}</div>
                                <div className="person">
                                    <div className="avatar">
                                        <img src={currentAlbum.creator.avatarUrl} alt="" />
                                    </div>
                                    <div className="name">{currentAlbum.creator.nickname}</div>
                                </div>
                            </div>
                        </TopDesc>
                        <Menu>
                            <div>
                                <i className="iconfont">&#xe6ad;</i>
                                评论
                            </div>
                            <div>
                                <i className="iconfont">&#xe86f;</i>
                                点赞
                            </div>
                            <div>
                                <i className="iconfont">&#xe62d;</i>
                                收藏
                            </div>
                            <div>
                                <i className="iconfont">&#xe606;</i>
                                更多
                            </div>
                        </Menu>
                        <SongList showBackground={true}>
                            <div className="first_line">
                                <div className="play_all">
                                    <i className="iconfont">&#xe6e3;</i>
                                    <span > 播放全部 <span className="sum">(共 {currentAlbum.tracks.length} 首)</span></span>
                                </div>
                                <div className="add_list">
                                    <i className="iconfont">&#xe62d;</i>
                                    <span > 收藏 ({getCount(currentAlbum.subscribedCount)})</span>
                                </div>
                            </div>
                            <SongItem>
                                {
                                    currentAlbum.tracks.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="index">{index + 1}</span>
                                                <div className="info">
                                                    <span>{item.name}</span>
                                                    <span>
                                                        {getName(item.ar)} - {item.al.name}
                                                    </span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </SongItem>
                        </SongList>
                    </div>
                </Scroll>
                }
                {enterLoading ? <Loading></Loading> : null}
            </Container>
        </CSSTransition>
    )
}))
