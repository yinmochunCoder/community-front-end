<template>
  <div class="login-wrapper">
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
              <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
              <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">点击登录</el-button>
              <el-button>忘记密码</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              form: {
                  name: '',
                  pwd: '',
                  code: '',
              }
          }
      },
      methods: {
          onSubmit() {
              console.log('submit!');
          }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login-wrapper {
        padding: 30px;
    }
    .el-form {
        max-width: 400px;
    }
</style>