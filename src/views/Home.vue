<template>
  <!-- <HelloWorld/> -->
  <div>
    <HelloWorld/>
    <h1>{{info}}</h1>
  </div>

</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      info: 'Hello'
    }
  }

}
</script>

<style>

</style>
