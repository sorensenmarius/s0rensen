<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import topMenu from './components/topMenu';
import bottomFooter from './components/bottomFooter';
export default {
  name: 'App',
  components: {
    'topMenu': topMenu,
    'bottomFooter': bottomFooter
  },
  created() {
    document.title = "Marius Sørensen"
  }
}
</script>

<style lang="scss">
@import '/css/headers.scss';
@import '/css/config';
@import '/css/mobile';


* {
  box-sizing: border-box;
}

body {
  background: #444;
  color: white;

  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
}
</style>
