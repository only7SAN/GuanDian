<template>
  <div class="navigator">
    <md-toolbar class="navigator-toolbar md-primary">
      <i class="nav-back material-icons">keyboard_backspace</i>
      <i class="nav-more material-icons">more_vert</i>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .navigator{
    position: absolute;
    top:0px;
    left:0px;
    right:0px;
    display: flex;
    height:50px;
    color:#fff;
  }
  .navigator-toolbar{
    display: flex;
    padding: 0 15px;
    font-size: 16px;
    line-height:50px;
    justify-content: space-between;
  }
</style>
