<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  //引入normalize.css初始化css
import 'normalize.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
