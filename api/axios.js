import axios from 'axios'
import config from '../config'
/* 判断是开发环境还是生产环境 */
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.production
/* 封装axios */
class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  /* 定义axios相关配置 */
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      header: {}
    }
    return config
  }

  /* 拦截器封装 */
  interceptors (instance) {
    /* 添加请求拦截器 */
    instance.interceptors.request.use(function (config) {
      /* 在发送请求之前作什么 */
      return config
    }, function (error) {
      /* 对请求错误做些什么 */
      return Promise.reject(error)
    })

    /* 添加响应拦截器 */
    instance.interceptors.response.use(function (response) {
      /* 对响应数据做些什么 */
      return response
    }, function (error) {
      /* 对错误数据做些什么 */
      return Promise.reject(error)
    })
  }

  /* 接口请求封装 接收相关配置 */
  request (options) {
    const instance = axios.create()
    options = {
      /* 对相关配置进行解构 */
      ...this.getInsideConfig(),
      /* 对传入配置进行解构 */
      ...options
    }
    /* 调用拦截器，传入创建的axios实例 */
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
