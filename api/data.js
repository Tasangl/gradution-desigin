import axios from './axios'

export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    methods: 'get',
    data: param
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData',
    methods: 'get'
  })
}

export const getUser = (params) => {
  return axios.request({
    url: '/user/getUser',
    methods: 'get',
    params
  })
}
export const getTemperatureData = () => {
  return axios.request({
    url: '/temperature/getTemperatureData',
    methods: 'get'
  })
}
export const getHumidityData = () => {
  return axios.request({
    url: '/humidity/getHumidityData',
    methods: 'get'
  })
}
export const getHeatData = () => {
  return axios.request({
    url: '/heat/getHeatData',
    methods: 'get'
  })
}
export const getLiquidData = () => {
  return axios.request({
    url: '/liquid/getLiquidData',
    methods: 'get'
  })
}
/* export const getLightData = () => {
  return axios.request({
    url: 'http://47.95.11.134:11451/data/light',
    methods: 'post'
  })
}
 */
