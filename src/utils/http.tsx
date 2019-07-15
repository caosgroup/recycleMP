import Taro from '@tarojs/taro'

const ajax = (
  url:string,
  data?:object,
  method?:"GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
) => {
  for (var Key in data) {
    if (data[Key] === null) {
      delete data[Key];
    }
  }
  return new Promise((resolve, reject) => {
    Taro.request({
      url:  `${ WXAPP_URL }${url}`,
      data: data || {},
      method: method || 'GET',
      header: {
        "content-type": "application/x-www-form-urlencoded",
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
  
}
export default {
  get(url:string, data?:object) {
    return ajax(url, data, 'GET')
  },
  post(url:string, data?:object) {
    return ajax(url, data, 'POST')
  }
}