import React from 'react'

export default class ErrorCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: false }
    }
    static getDerivedStateFromError(error) {
        console.log(error)
        return { error: true }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }
    render() {
        if (this.state.error) {
            return <h1>Error</h1>
        }
        return (
            <div>
                <Child />
            </div>
        )
    }
}
function Child() {
    if (Math.random() < 0.5) {
        throw new Error('')
    }
    return <h1>child</h1>
}