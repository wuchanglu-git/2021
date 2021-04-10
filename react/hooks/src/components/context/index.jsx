import React, { Component } from 'react'
const ThemeContext = React.createContext({ name: '张三', age: 18,setContext:()=>{} })
export default class Context extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { name: '里斯', age: 35 }
        }
    }
    setContext=(key,value)=>{
        this.setState({
            data:Object.assign(this.state.data,{[key]:value})
        })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: { name: '周五', age: 99 }
            })
        }, 3000);
    }
    render() {
        const {setContext} = this
        return (
            <ThemeContext.Provider value={{...this.state.data,setContext}}>
                <Level1></Level1>
            </ThemeContext.Provider>
        )
    }
}
function Level1() {
    return (<div>
        level1:
        <Level2></Level2>
    </div>)
}
function Level2() {
    return (<div>
        level2:
        <Level3></Level3>
        <Level3_1></Level3_1>
    </div>)
}
class Level3 extends Component {
    static contextType = ThemeContext
    clickHandle=()=>{
        const { context} = this
        context.setContext('age',Number.parseInt(Math.random()*100))
    }
    render() {
        const { context } = this
        return (
            <h1>
                姓名：{context.name}<br></br>
                年纪：{context.age}
                <button onClick={this.clickHandle}>修改年纪</button>
            </h1>
        )
    }
}
function Level3_1() {
    return <ThemeContext.Consumer>
        {context => <h1>
            姓名：{context.name}<br></br>
                年纪：{context.age}
        </h1>}
    </ThemeContext.Consumer>
}