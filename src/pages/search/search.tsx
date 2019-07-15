import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Search from '../../components/search'
import API from '../../apis/index';
import { sortDataList } from '../../statics/sort';

import './share.less'

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '查一查你是什么垃圾'
  }
  state = {
    keyword: '',
    resData: {}
  }
  search = (keyword:any) => {
    this.setState({
      keyword
    })
    API.search({
      type: 1,
      name: keyword
    }).then((res:object) => {
      console.log('result', res)
    }).catch((err:object) => {
      this.setState({
        resData: {
          type: 1,
        }
      })
    })
  }
  render () {
    const { keyword } = this.state;
    return (
      <View className='searchWrapper'>
        <Search disabled={ false } toSearch = { this.search }/>
        {
          keyword ? 
          <View className="searchResult">
          
          </View>
          : 
          <View className="introduce">
            <View className="picWrapper">
            {
              sortDataList.map(i => 
                <Image
                  className="pic"
                  src={ i.pic }
                  key={ i.pic }
                />
              )
            }
            </View>
          </View>
        }
        
      </View>
    )
  }
}

export default Index  as ComponentType
