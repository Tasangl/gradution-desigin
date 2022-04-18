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
// import echarts from 'echarts'
import * as echarts from 'echarts'
Vue.prototype.axios = axios
Vue.prototype.echarts = echarts
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
