<template>
  <div class="main">
    <h1 class="lg-heading"><span class="text-secondary">My</span> Work</h1>
    <div class="work-grid">

      <div class="proj proj1">
        <h3>LED Website</h3>
        <h6>Vue.js, Node.js, Express.js, MySQL</h6>
        <h6>2019</h6>
        <p>A landingpage for the studentorganisation LED. With homemade backend functionality for adding, editing and deleting articles, boardmembers and banner photos. Includes image upload and user authentication.</p>
        <p>Live at <a href="https://led-uis.no" target="_blank">led-uis.no</a></p>
      </div>

      <div class="proj proj2">
        <h3>Smartstudy & Introduksjon</h3>
        <h6>Vue.js, Hapi.js, Node.js and MongoDB</h6>
        <h6>2018 - 2019</h6>
        <p>Full LMS's. One for general use (Smartstudy) and other for use in Smartstudy AS when teaching participants the Norwegian language. Both platforms based on flashcard functionality, with live voice and text chat.</p>
        <p>Read about Introduksjon: <a href="https://introduksjon.no" target="_blank">www.introduksjon.no</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work"
};
</script>
<style lang="scss">
@import "../css/work.scss";
@import '../css/config';
@import '../css/mobile';

a {
  color: white;
}

h6 {
  margin: 0;
}
</style>