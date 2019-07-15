import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'

import './search.less'

interface componentProps {
  disabled: boolean,
  toSearch?: Function
}

class Search extends Component<componentProps> {
  state = {
    keyword: '',
  }
  handleInput(e:any) {
    this.setState({ keyword: e.target.value });
  }
  toSearch = () => {
    const { toSearch } = this.props;
    if(toSearch) {
      toSearch(this.state.keyword);
    }
  }
  toSearchPage = () => {
    if (this.props.disabled) {
      Taro.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
  render () {
    const { disabled } = this.props;

    return (
      <View className="search-wrapper">
        <View className="search-content" onClick={ this.toSearchPage }>
          <Input 
            autoFocus={ !disabled }
            disabled={ disabled }
            type="text"
            className="search-input"
            placeholder="你今天是什么垃圾？"
            onInput={ this.handleInput }></Input>
          <Text className="search-label" onClick={ this.toSearch }>
            🔍
            </Text>
        </View>
      </View>
    )
  }
}

export default Search  as ComponentType<componentProps>
