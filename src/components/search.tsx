import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input, Text, Icon } from '@tarojs/components'

import './search.less'

class Search extends Component {
  render () {
    return (
      <View className="search-wrapper">
        <View className="search-content">
          <Input type="text" className="search-input" placeholder="垃圾自动分类"></Input>
          <Text className="search-label">
            🔍
            {/* <Icon size='60' type='success' /> */}
            </Text>
        </View>
      </View>
    )
  }
}

export default Search  as ComponentType
