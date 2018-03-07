<template>
  <div id="signin-container">
    <h1 class="signin-logo">G</h1>
    <div class="signin-form">
      <md-field md-clearable>
        <label>Cleareable</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Password toggle</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
    </div>

    <div class="buttons">
      <md-button class="md-raised md-primary">登录</md-button>
      <md-button class="md-raised md-accent">注册</md-button>
    </div>
  </div>
</template>

<script>

</script>

<style>
  #signin-container{
    overflow:hidden;
  }
  .signin-logo{
    position:absolute;
    top:60px;
    width:100%;
    text-align:center;
    font-size:128px;
    color:#448aff;
  }
  .signin-form{
    margin-top:250px;
  }
  .md-field{
    margin:10px 10%;
    width:80%;
  }
  .buttons{
    display:flex;
    margin-top:40px;
    justify-content:space-around;
  }
</style>
