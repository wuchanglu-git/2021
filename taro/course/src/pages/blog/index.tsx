import React,{Component} from 'react'
import { View,Text, Button,Image } from '@tarojs/components'
import { navigateBack,getCurrentPages, getCurrentInstance } from '@tarojs/taro'
import {say} from '../../tools/index'
//小程序真机引用本地图片资源有问题
//@ts-ignore
import demoPic from '../../statics/demo.webp'
class Blog extends Component{
    constructor(props){
        super(props)
    }
    clickHandle(){
        navigateBack()
    }
    sayButtonClickHandle(){
        say()
    }
    componentDidMount(){
        console.log(getCurrentPages())
        console.log(getCurrentInstance().router?.params)
    }
    render(){
        return <View>
            <Text onClick={this.clickHandle}>blog</Text>
            <Button onClick={say}>say</Button>
            <Image src={demoPic}></Image>
        </View>
    }
}
// navigateTo  redirectTo switchTab navigateBack relaunch getCurrentPage
export default Blog