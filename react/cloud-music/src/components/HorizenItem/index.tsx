

import { memo, useRef, useEffect, ElementType } from "react"
import Scroll from '../Scroll'
import { ListItem, List } from './style'
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
type PropsValues = {
    list: Array<{ key: string, name: string }>
    oldVal: string
    title: string
    handleClick: (key: string) => void
}


function HorizenItem(props: PropsValues) {
    const { list, oldVal, title } = props
    const { handleClick } = props
    const Category = useRef(null as any)
    useEffect(() => {
        if (Category) {
            let categoryDOM = Category.current;
            let tagElems = categoryDOM.querySelectorAll("span");
            let totalWidth = 0;
            Array.from(tagElems).forEach((ele: any) => {
                totalWidth += ele.offsetWidth
            })
            categoryDOM.style.width = `${totalWidth}px`;
        }
    }, [Category])
    return (
        <Scroll direction="horizental">
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map(item => {
                            return (
                                <ListItem
                                    key={item.key}
                                    className={`${oldVal === item.key ? 'selected' : ''}`}
                                    onClick={() => handleClick(item.key)}>
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll>
    )
}
HorizenItem.defaultProps = {
    list: [],
    oldVal: '',
    title: '',
    handleClick: () => { }
}
export default memo(HorizenItem)
