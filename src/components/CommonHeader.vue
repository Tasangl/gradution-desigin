<template>
  <header>
    <div class="l-content">
      <el-button
        @click="handlerMenu"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->

      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="userImg" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--  <el-dropdown>
        <el-button type="primary">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  data () {
    return {
      userImg: require('../assets/images/user.png')
    }
  },
  methods: {
    handlerMenu () {
      // console.log('handlerMenu')
      this.$store.commit('collapseMenu')
    },
    logOut () {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      tags: state => state.Tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
