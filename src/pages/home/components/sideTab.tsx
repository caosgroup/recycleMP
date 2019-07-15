import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { sortDataList } from '../../../statics/sort';

import './sideTab.less'

interface componentProps {
  tabIndex: number,
  changeTab: Function
}

interface componentState {
  SliderList: Array<object>
}

class SideTab extends Component<componentProps, componentState> {
  handleChangeClass(tabIndex: number) {
    this.props.changeTab(tabIndex)
  }
  render () {
    const { tabIndex } = this.props;
    const sliderDom = sortDataList.map(i => {
      const labelBgStyle = {
        'background-color': i.color,
        'width': tabIndex === i.type ? '100%': '0',
        
      }
      const labelStyle = {
        'color': tabIndex === i.type ? '#ffffff': '#333333',
      }
      return <View className="sliderItem" key={i.type} onClick={this.handleChangeClass.bind(this, i.type)}>
        <View className="sliderBorder" style={{'borderColor': i.color}}></View>
        <View className="sliderLabel">
          <View className="label" style={labelStyle}>{i.label}</View>
          <View className="labelBg" style={labelBgStyle}></View>
        </View>
      </View>
    })
    return (
      <View className="slider">
        { sliderDom }
      </View>
   )
  }
}

export default SideTab as ComponentType<componentProps>
