<template>
  <div id="login-container">
    <h1 class="login-logo">关键1票</h1>
    <div class="login-form">
      <md-field md-clearable>
        <label>用户名</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>请输入密码</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
    </div>

    <div class="login-buttons">
      <md-button class="login-button md-raised md-primary">登录</md-button>
      <md-button class="login-button md-raised md-accent">注册</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'SignIn',
    data(){
      return {
          initial : '',
          password : ''
        }
    }
  }
</script>

<style>
#login-container{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  overflow:hidden;
}
.login-logo{
  position:absolute;
  top:120px;
  width:100%;
  text-align:center;
  font-size:48px;
  color:#448aff;
}
.login-form{
  margin-top:250px;
}
.md-field{
  margin:10px 10%;
  width:80%;
}
.login-buttons{
  display:flex;
  margin-top:40px;
  justify-content:space-around;
}
.login-button{
  border-radius: 10px;
}
</style>
