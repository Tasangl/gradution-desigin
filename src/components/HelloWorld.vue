<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/user">
      <el-button type="primary">User按钮</el-button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
