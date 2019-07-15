import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Layout from '../../components/layout'
import Search from '../../components/search'
import SideTab from './components/sideTab'
import ContentTab from './components/content'

import './home.less'

class Home extends Component {
  config: Config = {
    navigationBarTitleText: '垃圾分类指北'
  }
  state = {
    tabIndex: 1,
  }
  changeTab = (tabIndex: number) => {
    this.setState({ tabIndex })
  }
  render () {
    const { tabIndex } = this.state
    return (
      <Layout>
        <Search  disabled={ true }/>
        <View className="home-wrapper">
          <SideTab tabIndex={ tabIndex } changeTab={ this.changeTab }/>
          <ContentTab tabIndex={ tabIndex }/>
        </View>
      </Layout>
    )
  }
}

export default Home  as ComponentType
