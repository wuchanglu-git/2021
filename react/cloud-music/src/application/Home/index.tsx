import React from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import {NavLink} from 'react-router-dom'
import { Top,Tab,TabItem } from './style'
import MenuSvg from '../../assets/icon/menu.svg'
import SearchSvg from '../../assets/icon/search.svg'
let CompF = (props: RouteConfigComponentProps<any>) => {
    const { route } = props
    return (
        <div>
            <Top>
                <img className="icon" src={MenuSvg} alt="" />
                <span className="title">WebApp</span>
                <img className="icon" src={SearchSvg} alt="" />
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected">
                    <TabItem><span>推荐</span></TabItem>
                </NavLink>
                <NavLink to="/singers" activeClassName="selected">
                    <TabItem><span>歌手</span></TabItem>
                </NavLink>
                <NavLink to="/rank" activeClassName="selected">
                    <TabItem><span>榜单</span></TabItem>
                </NavLink>
            </Tab>
            {renderRoutes(route?.routes)}
        </div>
    )
}
const Home = React.memo(CompF)
export { Home }