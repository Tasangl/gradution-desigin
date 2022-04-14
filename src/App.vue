<template>
  <div id="app">
    <Home/>
  </div>
</template>
<script>
import Home from './views/MainHome.vue'
export default {
  components: {
    Home
  }
}
</script>
<style>
html,body{
  margin: 0;
  padding: 0;
}
#app {
  height:100%;
}
</style>
