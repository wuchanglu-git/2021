import React, { Component } from 'react'
const CELSIUS='CELSIUS'
const FAHRENHRIT='FAHRENHRIT'
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function TemperatureInput(props){
    const {temperature,type} = props
    const {temperatureChange}=props
    const inputHandle=(e)=>{
        console.log(e)
        temperatureChange(e.target.value||0)
    }
    return (<div>
        <span>{type===CELSIUS?'摄氏度':'华氏度'}</span>
        <input type="text" value={temperature} onChange={inputHandle} name="" id=""/>
    </div>)
}
export default class Calculator extends Component {
    constructor(props){
        super(props)
        this.state={
            celsius:25
        }
    }
    render() {
        const {celsius} = this.state
        return (
            <div>
                摄氏度：{celsius} <br></br>
                华氏度：{toFahrenheit(celsius)}
                <TemperatureInput type={CELSIUS} temperature={celsius} temperatureChange={(val=>{this.setState({celsius:val})})}/>
                <TemperatureInput type={FAHRENHRIT} temperature={toFahrenheit(celsius)} temperatureChange={val=>{
                    this.setState({celsius:toCelsius(val)})
                }}/>

            </div>
        )
    }
}
