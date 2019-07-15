import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { sortDataList } from '../../../statics/sort';

import './content.less'

interface componentProps {
  tabIndex: number
}

class ContentTab extends Component<componentProps> {
  render () {
    const { tabIndex = 1 } = this.props;
    const [tabContent] = sortDataList.filter(i => i.type === tabIndex)

    return (
      <View className="content-wrapper">
        <View className="content" style={{background: tabContent.bg}}>
          <Image
            className="pic"
            src={ tabContent.pic }
          />
          <View className="detail">
            <Text className="label">
              { tabContent.label }
            </Text>
            <Text className="define">
              ，{ tabContent.define }
            </Text>
          </View>
          <View className="rules">
            <View className="ruleTitle">
              投放规则：
            </View>
            { tabContent.rules.map((i,idx) => 
              <View className="ruleItem" key={idx}>
                {i}
              </View>
            ) }
          </View>
        </View>
      </View>
   )
  }
}

export default ContentTab  as ComponentType<componentProps>
