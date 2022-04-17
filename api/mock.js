import Mock from 'mockjs'
import homeApi from './MockServeData/home'
Mock.mock('/home/getData', homeApi.getStatisticalData)
