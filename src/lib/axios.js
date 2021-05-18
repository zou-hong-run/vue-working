import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  // 内部默认的全局配置
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }

  // 添加一个拦截器
  interceptors (instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // console.log("请求拦截",config)
      if (Object.keys(this.queue).length) {
        // 添加全局的loading
        // Spin.show()
        // Spin.show
      }
      // 添加一个新的请求
      this.queue[url] = true
      return config
    }, err => {
      // 该方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
      return Promise.reject(err)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      // 删除添加的请求
      delete this.queue[url]
      // console.log("响应拦截",res)
      const { data, status } = res
      return { data, status }
    }, err => {
      delete this.queue[url]
      // 该方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
      return Promise.reject(err)
    })
  }

  // 创建一个请求传入一个配置
  request (options) {
    // 创建一个实例，是一个函数
    const instance = axios.create()
    // 将options复制到this身上 合并同类项 后面覆盖前面
    options = Object.assign(this.getInsideConfig(), options)
    // 添加一个拦截器
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default new HttpRequest()
