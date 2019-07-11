import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Home from './pages/home/home'

import mainStore from './store/main'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  mainStore
}

if (Taro.hideTabBar) {
  Taro.hideTabBar(); // 隐藏默认tabbar
}

class App extends Component {

  
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/home',
      'pages/test/test',
      'pages/share/share',
      'pages/chat/chat',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/home/home',
        text: '指北'
      }, {
        pagePath: 'pages/test/test',
        text: '测试'
      }, {
        pagePath: 'pages/chat/chat',
        text: '交流'
      }, {
        pagePath: 'pages/share/share',
        text: '下载'
      }]
    }
  }
  componentWillMount() {
    if (Taro.hideTabBar) {
      Taro.hideTabBar(); // 隐藏默认tabbar
    }
  }
  componentDidMount () {
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
