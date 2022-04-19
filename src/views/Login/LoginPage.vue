<template>
    <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="loginContainer"
    >
        <h3 class="loginTitle">系统登陆</h3>
        <el-form-item label="用户名" label-width="80px" prop="username" class="username">
            <el-input v-model="form.username" type="input" auto-complete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="password" class="password">
            <el-input v-model="form.password" type="password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="loginSubmit">
            <el-button type="primary" @click="login" class="loginSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { getMenu } from '../../../api/data'
export default {
  name: 'LoginPage',
  data () {
    return {
      form: {

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名长度不能小于三位',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      /* const token = Mock.random.guid()
      this.$store.commit('setToken', token)
      this.$router.push({ name: 'home' }) */
      getMenu(this.form).then(({ data: res }) => {
        console.log('res', res)
        if (res.code === 20000) {
          this.$store.commit('clearMenu')
          this.$store.commit('setMenu', res.data.menu)
          this.$store.commit('setToken', res.data.token)
          this.$store.commit('addMenu', this.$router)
          this.$router.push({ name: 'home' })
        } else {
          this.$message.warning(res.data.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
.loginSubmit{
    margin: 10px auto 0px auto;
}
</style>
