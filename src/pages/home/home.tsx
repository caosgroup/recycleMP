import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Layout from '../../components/layout'
import Search from '../../components/search'

import './home.less'

class Home extends Component {
  config: Config = {
    navigationBarTitleText: '垃圾分类指北'
  }
  state = {
    slideList: [{
      key: 0,
      label: '可回收物',
      pic: '',
      color: 'blue'
    }, {
      key: 1,
      label: '厨余垃圾',
      pic: '',
      color: 'green'
    }, {
      key: 2,
      label: '有害垃圾',
      pic: '',
      color: 'red'
    }, {
      key: 3,
      label: '其他垃圾',
      pic: '',
      color: 'gray'
    }],
    activeIndex: 0
  }
  handleChangeClass(nextIndex) {
    this.setState({
      activeIndex: nextIndex
    })
  }

  render () {
    const slideDom = this.state.slideList.map(i => {
      const labelBgStyle = {
        'background-color': i.color,
        'width': this.state.activeIndex === i.key ? '100%': '0',
        
      }
      const labelStyle = {
        'color': this.state.activeIndex === i.key ? '#ffffff': '#333333',
      }
      return <View className="slideItem" key={i.key} onClick={this.handleChangeClass.bind(this, i.key)}>
        <View className="slideBorder" style={{'borderColor': i.color}}></View>
        <View className="slideLabel">
          <View className="label" style={labelStyle}>{i.label}</View>
          <View className="labelBg" style={labelBgStyle}></View>
        </View>
      </View>
    })
    return (
      <Layout>
        <Search></Search>
        <View className="home-wrapper">
          <View className="slide">
            {slideDom}
          </View>
          <View className="slide-content">
            contetn
          </View>
        </View>
      </Layout>
    )
  }
}

export default Home  as ComponentType
