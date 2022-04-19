# gradution-desigin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### LUYOU
```
menu: [
        {
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
          children: [
            {
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
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: '-user',
          url: 'UserManage/UserManage'
        },
        {
          path: '/record',
          name: 'record',
          label: '历史记录',
          icon: '-time',
          url: 'HistoryRecord/HistoryRecord',
          children: [
            {
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
      ]
```