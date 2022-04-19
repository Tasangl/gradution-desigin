import axios from './axios'

export const getMenu = (param) => {
  return axios.request({
    url: '/permission/getMenu',
    methods: 'post',
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
