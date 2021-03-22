import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import './index.scss'
type File = {
  url: ""
}
interface StateValues {
  account: string,
  password: string,
  vcode: string,
  nickName: string,
  avator: string,
  files: File[],
}
interface PropsValues { }
const DEFAULT_STATE = {
  account: '',
  password: '',
  vcode: '',
  nickName: '',
  avator: '',
  files: []
}
export default class Registe extends Component<PropsValues, StateValues> {

  componentWillMount() { }
  constructor(props) {
    super(props)
    this.state = DEFAULT_STATE
  }
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleChange(key, value) {
    this.setState({
      [key]: value
    } as StateValues)
  }
  onSubmit() {
    console.log(this.state)
  }
  onReset() {
  }
  render() {
    const { onSubmit, onReset, handleChange } = this
    const { password, account, vcode, nickName } = this.state
    return (
      <AtForm onSubmit={onSubmit} onReset={onReset}>
        <View className='avator__wrapper'>
          <Image className='avator' src=''></Image>
        </View>
        <AtInput required title='账号' type='number' placeholder="请输入手机号" name='account' value={account} onChange={handleChange.bind(this, 'name')}></AtInput>
        <AtInput required title='密码' type='password' placeholder="请输入密码" name='password' value={password} onChange={handleChange.bind(this, 'password')}></AtInput>
        <AtInput required type='number' placeholder='请输入验证码' name='vcode' value={vcode} onChange={handleChange.bind(this, 'vcode')} maxlength={6}>
          <View className='vcode-btn'>获取验证码</View>
        </AtInput>
        <AtInput title='昵称' placeholder='请输入用户昵称' name='nickName' value={nickName} onChange={handleChange.bind(this, 'nickName')} maxlength={10}></AtInput>
        <AtButton formType='submit' type='primary' className='submit-btn'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}
