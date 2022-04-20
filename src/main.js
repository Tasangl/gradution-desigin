import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'reset.less'
import './assets/less/index.less'
import axios from 'axios'
import '../api/mock'
import 'mockjs'
// import echarts from 'echarts'
import * as echarts from 'echarts'
Vue.prototype.axios = axios
Vue.prototype.echarts = echarts
Vue.use(ElementUI)

// 前置路由守卫
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.commit('addMenu', router)
  }
}).$mount('#app')
