<template>
  <div id="nav">
    <router-link
      to="/"
      tag="img"
      src="https://www.mashterka.com/wp-content/uploads/2020/11/cropped-cropped-icon2-1-240x96.png"
      class="logo"
    ></router-link>
    <div class="options-holder">
      <router-link class="link" to="/" tag="button">Начало</router-link>
      <router-link class="link" to="/izhrana" tag="button">Изхрана</router-link>
      <router-link class="link" to="/dom" tag="button">Дом</router-link>
      <router-link class="link" to="/znanie" tag="button">Знание</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="sass" scoped>
$padding-x: 1%

#nav
  width: calc(100% - #{$padding-x * 2})
  height: fit-content
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1% $padding-x
  .router-link-exact-active
    color: #4064d7
  .logo
    width: 14vw
    height: auto
    cursor: pointer
    transition: all 0.3s
    &:hover
      transform: scale(1.1)
  .options-holder
    display: flex
    .link
      all: initial
      color: #3a3a3a
      margin: 0 10px
      font-size: 3vw
      cursor: pointer
      transition: all 0.3s
      &.router-link-exact-active
        color: #4064d7
</style>