<template>
  <div id="app">
    <NavBar />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="sass">
@import "./assets/global.sass"

html,body
  margin: 0
  width: 100%
  height: 100%

#app
  all: initial
  min-height: 100vh
  display: flex
  flex-direction: column
  // font-family: Avenir, Helvetica, Arial, sans-serif
  // -webkit-font-smoothing: antialiased
  // -moz-osx-font-smoothing: grayscale
  // color: #2c3e50
  // margin-top: 60px
  .content
    max-width: 1000px
    min-height: 67vh
    display: flex
    justify-content: center
    align-items: center
    margin: 0 auto

@media only screen  and (max-width: 999px)
  .content
    margin: 0 3% !important
</style>


