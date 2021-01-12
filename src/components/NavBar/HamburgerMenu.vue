<template>
  <div
    @click="toggleMenu"
    ref="menu"
    :class="['hamburger-menu', menuOpened ? 'change' : '']"
  >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>

    <div v-if="menuOpened" class="menu-options-holder">
      <router-link
        @click="closeMenu"
        :to="link.path"
        v-for="link in links"
        :key="link.text"
        tag="button"
        class="link"
      >
        {{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
import links from "./linksHelper";

export default {
  name: "HamburgerMenu",
  data() {
    return {
      menuOpened: false,
      links,
    };
  },
  methods: {
    toggleMenu(x) {
      this.menuOpened = !this.menuOpened;
    },
    closeMenu() {
      this.menuOpened = false;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "_variables.sass"

.hamburger-menu
  display: none
  margin-right: 10px
  cursor: pointer
.bar1, .bar2, .bar3
  width: 35px
  height: 5px
  background-color: #333
  margin: 6px 0
  transition: all 0.3s
.change .bar1
  transform: rotate(-45deg) translate(-9px, 6px)
.change .bar2
  opacity: 0
.change .bar3
  transform: rotate(45deg) translate(-8px, -8px)

.menu-options-holder
  width: 100vw
  height: calc(100vh - (#{$nav-bar-height} + #{$padding-y * 2})) !important
  height: fit-content
  position: absolute
  top: calc(#{$nav-bar-height} + #{$padding-y * 2})
  left: 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: white
  .link
    margin: 5px 0
    color: black
    background-color: transparent
    border: none
    &:hover
      color: #4064d7 !important

@media only screen and (max-width: 767px)
  .hamburger-menu
    display: inline-block !important
@media only screen and (max-width: 767px) and (orientation: portrait)
  .link
    font-size: 11vw !important
@media only screen and (max-width: 767px) and (orientation: landscape)
  .link
    font-size: 5vw !important
</style>