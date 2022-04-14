<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
    <h3>地铁隧道环境监测系统</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in singleNav" :index="item.path" :key="item.path">
        <i :class="`el-icon${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in MultipleNav" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="`el-icon${item.icon}`"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="lab in item.children" :key="lab.path">
          <el-menu-item :index="lab.path">{{lab.label}}</el-menu-item>
         <!--  <el-menu-item index="1-2">湿度</el-menu-item>
          <el-menu-item index="1-3">液位</el-menu-item>
          <el-menu-item index="1-4">热源</el-menu-item>
          <el-menu-item index="1-5">光强</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">历史记录</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">温度</el-menu-item>
          <el-menu-item index="1-2">湿度</el-menu-item>
          <el-menu-item index="1-3">液位</el-menu-item>
          <el-menu-item index="1-4">热源</el-menu-item>
          <el-menu-item index="1-5">光强</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      isCollapse: false,
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
              path: '/temperature',
              name: 'temperature',
              label: '温度',
              icon: '-sunny',
              url: 'Display/temperature'
            },
            {
              path: '/humidity',
              name: 'humidity',
              label: '湿度',
              icon: '-heavy-rain',
              url: 'Display/liquid'
            },
            {
              path: '/liquid',
              name: 'liquid',
              label: '液位',
              icon: '-umbrella',
              url: 'Display/liquid'
            },
            {
              path: '/heat',
              name: 'heat',
              label: '热源',
              icon: '-hot-water',
              url: 'Display/heat'
            },
            {
              path: '/light',
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
              path: '/temperature',
              name: 'temperature',
              label: '温度',
              icon: '-sunny',
              url: 'HistoryRecord/temperature'
            },
            {
              path: '/humidity',
              name: 'humidity',
              label: '湿度',
              icon: '-heavy-rain',
              url: 'HistoryRecord/liquid'
            },
            {
              path: '/liquid',
              name: 'liquid',
              label: '液位',
              icon: '-umbrella',
              url: 'HistoryRecord/liquid'
            },
            {
              path: '/heat',
              name: 'heat',
              label: '热源',
              icon: '-hot-water',
              url: 'HistoryRecord/heat'
            },
            {
              path: '/light',
              name: 'light',
              label: '光照强度',
              icon: '-view',
              url: 'HistoryRecord/light'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu (item) {
      this.$router.push({
        name: item.name
      })
    }
  },
  computed: {
    singleNav () {
      return this.menu.filter((item) => {
        return !item.children
      })
    },
    MultipleNav () {
      return this.menu.filter((item) => {
        return item.children
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width:200px;
  min-height:400px;
}
.el-menu {
  height: 100%;
  border:none;
  h3{
    color: #fff;
    text-align: center;
    line-height:28px
  }
}

</style>
