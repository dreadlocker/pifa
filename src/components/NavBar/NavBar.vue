<template>
  <div id="nav">
    <router-link
      to="/"
      tag="img"
      src="https://www.mashterka.com/wp-content/uploads/2020/11/cropped-cropped-icon2-1-240x96.png"
      class="logo"
    ></router-link>

    <div class="options-holder">
      <router-link
        :to="link.path"
        v-for="link in links"
        :key="link.text"
        tag="button"
        class="link"
      >
        {{ link.text }}
      </router-link>
    </div>

    <div class="dummy"></div>
    <HamburgerMenu />
  </div>
</template>

<script>
import HamburgerMenu from "./HamburgerMenu";
import links from "./linksHelper";

export default {
  name: "NavBar",
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="sass" scoped>
@import "_variables.sass"

$padding-x: 1%

#nav
  width: calc(100% - #{$padding-x * 2})
  height: $nav-bar-height
  display: flex
  justify-content: space-between
  align-items: center
  padding: $padding-y $padding-x
  .router-link-exact-active
    color: #4064d7
  .logo
    width: auto
    height: inherit
    cursor: pointer
    transition: all 0.3s
    &:hover
      transform: scale(1.1)
  .options-holder
    display: flex
    .link
      &.router-link-exact-active
        color: #4064d7
.link
  all: initial
  color: #3a3a3a
  margin: 0 10px
  font-size: 3vw
  cursor: pointer
  transition: all 0.3s
  background-color: transparent
  border: none
.dummy
  display: none

@media only screen and (max-width: 767px)
  .options-holder, .logo
    display: none !important
  .dummy
    display: inline
</style>