import Cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false,
    /* 面包屑仓库 */
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    /* 记录所选面包屑，附加高亮效果 */
    currentRouterMenu: null,
    menu: []
  },
  mutations: {
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu (state, value) {
      // 点击是否为首页
      if (value.name !== 'home') {
        state.currentRouterMenu = value
        // 当前点击项是否存在于state中
        const result = state.tabsList.findIndex(item => item.name === value.name)
        // 判断 如果不存在就添加到state中
        if (result === -1) {
          state.tabsList.push(value)
          console.log(value)
        }
      } else {
        state.currentRouterMenu = null
      }
    },
    closeTag (state, value) {
      // 查找标签是否存在
      const result = state.tabsList.findIndex(item => item.name === value.name)
      // 删除
      state.tabsList.splice(result, 1)
    },
    setMenu (state, value) {
      state.menu = value
      Cookie.set('menu', JSON.stringify(value))
    },
    clearMenu (state) {
      state.menu = []
      Cookie.remove('menu')
    },
    // 动态添加路由
    addMenu (state, router) {
      if (!Cookie.get('menu')) {
        return
      }
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      const menuArray = []
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`../views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
        } else {
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
      })
      // 动态路由添加
      menuArray.forEach(item => {
        router.addRoute('MainHome', item)
      })
    }
  },
  actions: {
    /*  collapseMenu ({ commit }) {
      commit('collapseMenu')
    } */
  }
}
