import React,{Component} from 'react'
import { View,Text } from '@tarojs/components'
import { navigateBack,getCurrentPages, getCurrentInstance } from '@tarojs/taro'
class Blog extends Component{
    constructor(props){
        super(props)
    }
    clickHandle(){
        navigateBack()
    }
    componentDidMount(){
        console.log(getCurrentPages())
        console.log(getCurrentInstance().router?.params)
    }
    render(){
        return <View>
            <Text onClick={this.clickHandle}>blog</Text>
        </View>
    }
}
// navigateTo  redirectTo switchTab navigateBack relaunch getCurrentPage
export default Blog