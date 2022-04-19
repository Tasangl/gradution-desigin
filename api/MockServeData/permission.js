import Mock from 'mockjs'

export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: '-house',
            url: 'Home/index.vue'
          },
          {
            path: '/display',
            name: 'display',
            label: '数据展示',
            icon: '-discover',
            children: [{
              path: '/display/temperature',
              name: 'temperature',
              label: '温度',
              icon: '-sunny',
              url: 'DisplayData/TemperatureData.vue'
            },
            {
              path: '/display/humidity',
              name: 'humidity',
              label: '湿度',
              icon: '-heavy-rain',
              url: 'DisplayData/HumidityData.vue'
            },
            {
              path: '/display/liquid',
              name: 'liquid',
              label: '液位',
              icon: '-umbrella',
              url: 'DisplayData/LiquidData.vue'
            },
            {
              path: '/display/heat',
              name: 'heat',
              label: '热源',
              icon: '-hot-water',
              url: 'DisplayData/HeatData.vue'
            },
            {
              path: '/display/light',
              name: 'light',
              label: '光照强度',
              icon: '-view',
              url: 'DisplayData/LightData.vue'
            }
            ],
            url: 'DisplayData/index.vue'
          },
          {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: '-user',
            url: 'User/index.vue'
          },
          {
            path: '/record',
            name: 'record',
            label: '历史记录',
            icon: '-time',
            url: 'HistoryData/index.vue',
            children: [{
              path: '/record/historyTemperature',
              name: 'historyTemperature',
              label: '温度',
              icon: '-sunny',
              url: 'HistoryData/HistoryTemperatureData.vue'
            },
            {
              path: '/record/historyHumidity',
              name: 'historyHumidity',
              label: '湿度',
              icon: '-heavy-rain',
              url: 'HistoryData/HistoryHumidityData.vue'
            },
            {
              path: '/record/historyLiquid',
              name: 'historyLiquid',
              label: '液位',
              icon: '-umbrella',
              url: 'HistoryData/HistoryLiquidData.vue'
            },
            {
              path: '/record/historyHeat',
              name: 'historyHeat',
              label: '热源',
              icon: '-hot-water',
              url: 'HistoryData/HistoryHeatData.vue'
            },
            {
              path: '/record/historyLight',
              name: 'historyLight',
              label: '光照强度',
              icon: '-view',
              url: 'HistoryData/HistoryLightData.vue'
            }
            ]
          }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: '-house',
            url: 'Home/Home'
          },
          {
            path: '/display',
            name: 'display',
            label: '数据展示',
            icon: '-discover',
            children: [{
              path: '/display/temperature',
              name: 'temperature',
              label: '温度',
              icon: '-sunny',
              url: 'Display/temperature'
            },
            {
              path: '/display/humidity',
              name: 'humidity',
              label: '湿度',
              icon: '-heavy-rain',
              url: 'Display/liquid'
            },
            {
              path: '/display/liquid',
              name: 'liquid',
              label: '液位',
              icon: '-umbrella',
              url: 'Display/liquid'
            },
            {
              path: '/display/heat',
              name: 'heat',
              label: '热源',
              icon: '-hot-water',
              url: 'Display/heat'
            },
            {
              path: '/display/light',
              name: 'light',
              label: '光照强度',
              icon: '-view',
              url: 'Display/light'
            }
            ],
            url: 'DataDisplay/DataDisplay'
          },
          {
            path: '/record',
            name: 'record',
            label: '历史记录',
            icon: '-time',
            url: 'HistoryRecord/HistoryRecord',
            children: [{
              path: '/record/historyTemperature',
              name: 'historyTemperature',
              label: '温度',
              icon: '-sunny',
              url: 'HistoryRecord/historyTemperature'
            },
            {
              path: '/record/historyHumidity',
              name: 'historyHumidity',
              label: '湿度',
              icon: '-heavy-rain',
              url: 'HistoryRecord/historyHumidity'
            },
            {
              path: '/record/historyLiquid',
              name: 'historyLiquid',
              label: '液位',
              icon: '-umbrella',
              url: 'HistoryRecord/historyLiquid'
            },
            {
              path: '/record/historyHeat',
              name: 'historyHeat',
              label: '热源',
              icon: '-hot-water',
              url: 'HistoryRecord/historyHeat'
            },
            {
              path: '/record/historyLight',
              name: 'historyLight',
              label: '光照强度',
              icon: '-view',
              url: 'HistoryRecord/historyLight'
            }
            ]
          }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }
  }
}
