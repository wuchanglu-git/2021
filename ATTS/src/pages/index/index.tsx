import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import { USER_INFO } from '../../mock/index'
import { EChart } from 'echarts-taro3-react'
import { AtTabBar,AtFab,AtIcon } from 'taro-ui'

interface PropsValues {}
interface StateValues{
  currentTab:number
}
export default class Index extends Component<PropsValues,StateValues> {

  constructor(props){
    super(props)
    this.state={currentTab:0}
  }
  componentWillMount() { }

  componentDidMount() {
    // 初始化柱状图
    const defautOption = {
      title: {
        text: '柱状图',
        subtext: '纯属虚构',
        left: 'center'
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },

        },
      ],
      legend: {
        height: '750rpx'
      }
    };
    this.barChart.refresh(defautOption);
    // 初始化饼图
    const pieOption = {
      title: {
        text: '各事件类型',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '学习' },
            { value: 735, name: '无用' },
            { value: 580, name: '休闲' },
            { value: 484, name: '运动' },
            { value: 300, name: '聊天' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.pieChart.refresh(pieOption)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  barChart: any;
  refBarChart = (node) => (this.barChart = node)
  pieChart: any;
  refPieChart = (node) => (this.pieChart = node)
  setTab(index){
    this.setState({
      currentTab:index
    })
  }
  render() {
    const { refBarChart, refPieChart,setTab } = this
    const {currentTab} = this.state
    return (
      <View className='index'>
        <View className='user'>
          <Image className='user__avator' src={USER_INFO.avator}></Image>
          <View className='user__message'>
            <Text className='user__tip'>欢迎回来:</Text>
            <Text className='user__name'>{USER_INFO.nickName}</Text>
            <Text className='user__account'>{USER_INFO.account}</Text>
          </View>
        </View>
        <View className='section'>
          <View className='title'>总览：</View>
          <AtTabBar
            tabList={[
              { title: '日', text: 8 },
              { title: '周' },
              { title: '月', dot: true }
            ]}
            onClick={setTab.bind(this)}
            current={currentTab}
          />
          <View className='content'>
            <View className='bar-chart'>
              <EChart ref={refBarChart} canvasId='bar-canvas'></EChart>
            </View>
            <View className='pie-chart'>
              <EChart ref={refPieChart} canvasId='pie-canvas'></EChart>
            </View>
          </View>
        </View>
        <View className='section'>
          <View className='title'>接电话请问快递寄回去我看的很委屈</View>
        </View>
      </View>
    )
  }
}
