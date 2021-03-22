import React, { Component } from 'react'
import { View, Image, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { navigateTo, vibrateLong } from '@tarojs/taro'
import './index.scss'
type PropsValues = {}
type StateValues = {
  account: string,
  password: string,
  [key: string]: string
}
export default class Login extends Component<PropsValues, StateValues> {

  constructor(props) {
    super(props)
    this.state = { account: '', password: '' }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  linkToRegiste = () => {
    navigateTo({ url: '/pages/registe/index' })
  }
  inputHandle = (e, key: string) => {
    this.setState({
      [key]: e.detail.value as string
    })
  }
  submitClickHandle = () => {
    console.log(this.state)
  }
  resetClickHandle = () => {
    this.setState({
      account: '',
      password: ''
    })
  }
  render() {
    const { linkToRegiste, inputHandle, submitClickHandle, resetClickHandle } = this
    const { password, account } = this.state
    return (
      <View className='login'>
        <Image className='avator' src='' />
        <View className='form'>
          <Input type='number' className='form__input' placeholder='请输入账号：手机号' name='account' value={account} onInput={($event) => { inputHandle($event, 'account') }}></Input>
          <Input className='form__input' placeholder='请输入密码' name='password' password value={password} onInput={($event) => { inputHandle($event, 'password') }}></Input>
          <AtButton className='form__button' formType='submit' type='primary' onClick={submitClickHandle}>提交</AtButton>
          <AtButton className='form__button' formType='reset' onClick={resetClickHandle}>重置</AtButton>
        </View>
        <View className='registe-link' onClick={linkToRegiste}>没有账号？立即注册！</View>
      </View>
    )
  }
}
