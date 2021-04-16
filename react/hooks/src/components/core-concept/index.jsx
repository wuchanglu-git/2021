import React, { Component } from 'react'
import Calculator from './calculator'
import Children from './Children'
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    timerId = null
    trick() {
        this.setState({ date: new Date() })
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.trick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    render() {
        const { date } = this.state
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default function CoreConcept() {
    const left=(<h1>left</h1>)
    const right=(<h1>right</h1>)

    return (
        <div>
            <Clock />
            {/* <input value="aaaa"></input> */}
            <Calculator/>
            <Children left={left} right={right}>
                <h1>sahdhsada</h1>
            </Children>
        </div>
    )
}
