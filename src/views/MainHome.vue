<template>
  <!-- <HelloWorld/> -->
  <div>
    <el-container style="height:100%">
      <el-aside width="auto">
        <NavMenu/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu.vue'
export default {
  name: 'HomeView',
  components: {
    NavMenu
  },
  data () {
    return {
      info: 'Hello'
    }
  }
}
</script>

<style lang="less" scoped>

 .el-header, .el-footer {
    background-color: #000000;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 20px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding-top: 0;
  }

 /*  body > .el-container {
    margin-bottom: 40px;
  }
 */
 /*  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
