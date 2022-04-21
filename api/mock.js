import Mock from 'mockjs'
import homeApi from './MockServeData/home'
import userApi from './MockServeData/user'
import permissionApi from './MockServeData/permission.js'
import temperatureApi from './MockServeData/temperature.js'
import humidityApi from './MockServeData/humidity.js'
import heatApi from './MockServeData/heat.js'
import liquidApi from './MockServeData/liquid.js'
Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'post', userApi.deleteUser)
Mock.mock(/permission\/getMenu/, 'get', permissionApi.getMenu)
Mock.mock(/temperature\/getTemperatureData/, 'get', temperatureApi.getTemperatureData)
Mock.mock(/humidity\/getHumidityData/, 'get', humidityApi.getHumidityData)
Mock.mock(/heat\/getHeatData/, 'get', heatApi.getHeatData)
Mock.mock(/liquid\/getLiquidData/, 'get', liquidApi.getLiquidData)
