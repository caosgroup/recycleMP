import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import { View } from '@tarojs/components'

import './layout.less'
import '../statics/iconfont/iconfont.less'

type PageStateProps = {
  mainStore: {
    curTabIndex: number,
    setCurTabIndex: Function,
  },
  children: any
}

interface Layout {
  props: PageStateProps;
}

@inject('mainStore')
@observer

class Layout extends Component {
  state = {
    tabList: [{
      key: 1,
      label: "指北",
      icon: "iconshouce",
      page: "/pages/home/home",
    },{
      key: 2,
      label: "测试",
      icon: "iconTestUnitConfig",
      page: "/pages/test/test"
    },{
      key: 3,
      label: "交流",
      icon: "iconjiaoliu",
      page: "/pages/chat/chat"
    },{
      key: 4,
      label: "下载",
      icon: "iconxiazai",
      page: "/pages/share/share"
    }],
  }
  handleSwitchTab(url:string, index: number) {
    Taro.switchTab({ url })
    this.props.mainStore.setCurTabIndex(index)
  }
  render () {
    const tabListDom = this.state.tabList.map(i => {
      return <View
        className={`tabItem ${this.props.mainStore.curTabIndex === i.key ? 'cur' : ''}`} 
        key={i.key} 
        onClick={this.handleSwitchTab.bind(this, i.page, i.key)}
      >
        <View className={`iconfont ${i.icon}`}></View>
        {i.label}
      </View>
    })
    return (
      <View className='layout'>
          <View className="content">
            {this.props.children}
          </View>
        <View className="footer">
          <View className="tabbar">{tabListDom}</View>
        </View>
      </View>
    )
  }
}

export default Layout  as ComponentType
