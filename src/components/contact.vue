<template>
  <div class="main">
    <h1 class="lg-heading">Contact Me</h1>
    <div id="contactDiv">
      <h2><a href="mailto:marius@s0rensen.no" id="mailLink">marius@s0rensen.no</a></h2>
      <h2>+47 909 12 359</h2>
      <div id="contactIcons">
        <div class="smLogo"><a href="https://github.com/sorensenmarius" target="_blank"><img src="../assets/github.svg"></a></div>
        <div class="smLogo"><a href="https://www.linkedin.com/in/sorensenmarius/" target="_blank"><img src="../assets/linkedin.svg"></a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>
<style lang="scss">
@import '../css/contact.scss';
@import '../css/config';
@import '../css/mobile';
</style>