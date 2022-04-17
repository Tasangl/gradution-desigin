import axios from './axios'

export const getMenu = (params) => {
  return axios.request({
    url: '/permission/getMenu',
    methods: 'post',
    data: params
  })
}

export const getData = () => {
  return axios.request({
    url: '/home/getData',
    methods: 'get'
  })
}
