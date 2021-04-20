import  { useEffect, memo, useCallback } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { filterIndex } from '../../api/utils'
import Loading from '../../components/Loading'
import Scroll from '../../components/Scroll'
import { getRankList } from './store/actionCreator'
import { Container, List, ListItem, SongList } from './style'
const mapStateToProps = (state: { getIn: (arg0: string[]) => any }) => ({
    rankList: state.getIn(['rank', 'rankList']),
    loading: state.getIn(['rank', 'loading'])
})
const mapDispatchToProps = (dispatch: any) => {
    return {
        getRankListDispatch() {
            dispatch(getRankList())
        }
    }
}
export const Rank = connect(mapStateToProps, mapDispatchToProps)(
    memo(function Rank(props: any) {
        const { rankList: list, loading } = props;
        const { getRankListDispatch } = props;
        let rankList = list ? list.toJS() : []
        let globalStartIndex = filterIndex(rankList)
        let officialList = rankList.slice(0, globalStartIndex)
        let globalList = rankList.slice(globalStartIndex)
        useEffect(() => {
            getRankListDispatch()
        }, [getRankListDispatch])
        const renderSongList = (list: any[]) => {
            return list.length ? (
                <SongList>
                    {
                        list.map((item, index: number) => {
                            return <li key={index}>{index + 1}. {item.first} - {item.second}</li>
                        })
                    }
                </SongList>
            ) : null;
        }
        const enterDetail = useCallback(
            (name: string) => {
                console.log(name)
            },
            [],
        )
        // 这是渲染榜单列表函数，传入 global 变量来区分不同的布局方式
        const renderRankList = (list: any[], global: any) => {
            return (
                <List globalRank={global}>
                    {
                        list.map((item) => {
                            return (
                                <ListItem key={item.id} tracks={item.tracks} onClick={() => enterDetail(item.name)}>
                                    <div className="img_wrapper">
                                        <img src={item.coverImgUrl} alt="" />
                                        <div className="decorate"></div>
                                        <span className="update_frequecy">{item.updateFrequency}</span>
                                    </div>
                                    { renderSongList(item.tracks)}
                                </ListItem>
                            )
                        })
                    }
                </List>
            )
        }
        // 榜单数据未加载出来之前都给隐藏
        let displayStyle = loading ? { "display": "none" } : { "display": "" };
        return (
            <Container>
                <Scroll>
                    <div>
                        <h1 className="offical" style={displayStyle}> 官方榜 </h1>
                        {renderRankList(officialList, false)}
                        <h1 className="global" style={displayStyle}> 全球榜 </h1>
                        {renderRankList(globalList, true)}
                        {loading && <Loading></Loading>}
                    </div>
                </Scroll>
                {renderRoutes(props.route.routes)}
            </Container>
        )
    })
)
