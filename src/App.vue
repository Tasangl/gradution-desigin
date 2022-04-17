<template>
  <div id="app">
    <!-- <Home/> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import Home from './views/MainHome.vue'
export default {
  components: {
    // Home
  }
}
</script>
<style lang="less" scoped>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height:100%;
}
</style>
