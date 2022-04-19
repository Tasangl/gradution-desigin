import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/MainHome.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: () => import('../views/MainHome.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User')
      },
      {
        path: '/display',
        name: 'display',
        component: () => import('../views/DisplayData'),
        children: [
          {
            path: '/display/temperature',
            name: 'temperature',
            component: () => import('../views/DisplayData/TemperatureData.vue')
          },
          {
            path: '/display/humidity',
            name: 'humidity',
            component: () => import('../views/DisplayData/HumidityData.vue')
          },
          {
            path: '/display/heat',
            name: 'heat',
            component: () => import('../views/DisplayData/HeatData.vue')
          },
          {
            path: '/display/liquid',
            name: 'liquid',
            component: () => import('../views/DisplayData/LiquidData.vue')
          },
          {
            path: '/display/light',
            name: 'light',
            component: () => import('../views/DisplayData/LightData.vue')
          }
        ]
      },
      {
        path: '/record',
        name: 'record',
        component: () => import('../views/HistoryData'),
        children: [
          {
            path: '/record/historyTemperature',
            name: 'historyTemperature',
            component: () => import('../views/HistoryData/HistoryTemperatureData.vue')
          },
          {
            path: '/record/historyHumidity',
            name: 'historyHumidity',
            component: () => import('../views/HistoryData/HistoryHumidityData.vue')
          },
          {
            path: '/record/historyHeat',
            name: 'historyHeat',
            component: () => import('../views/HistoryData/HistoryHeatData.vue')
          },
          {
            path: '/record/historyLiquid',
            name: 'historyLiquid',
            component: () => import('../views/HistoryData/HistoryLiquidData.vue')
          },
          {
            path: '/record/historyLight',
            name: 'historyLight',
            component: () => import('../views/DisplayData/LightData.vue')
          }
        ]
      },
      {
        //  重定向 访问/时，定向到首页
        path: '*',
        redirect: '/home'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
