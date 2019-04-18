<template>
  <main id="home">
    <h1 class="lg-heading">Marius <span class="text-secondary">Sørensen</span></h1>
    <h2 class="sm-heading">
      <vue-typer
        :text='titles'
        :repeat='Infinity'
        :shuffle='true'
        initial-action='typing'
        :pre-type-delay='100'
        :type-delay='120'
        :pre-erase-delay='4000'
        :erase-delay='150'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      >
      </vue-typer>
    </h2>
  </main>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      titles: ["Web Developer", "Programmer", "Web Designer", "Entrepreneur", "Computer Science Student", "Software Developer"]
    }
  }
}
</script>


<style lang="scss">
@import '../css/home.scss';
</style>