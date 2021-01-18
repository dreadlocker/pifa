<template>
  <div id="nav">
    <router-link
      to="/"
      tag="img"
      src="https://www.mashterka.com/wp-content/uploads/2020/11/cropped-cropped-icon2-1-240x96.png"
      class="logo"
    ></router-link>

    <div class="options-holder">
      <div class="search-holder">
        <div :class="['search-results', areSearchResultsHidden ? 'hide' : '']">
          <router-link
            v-for="article in foundArticles"
            @click.native="selectFoundArticle"
            :to="article.path"
            tag="button"
            :key="article.text"
          >
            {{ article.text }}
          </router-link>
        </div>
      </div>
      <router-link
        :to="link.path"
        v-for="link in links"
        :key="link.text"
        tag="button"
        class="link"
      >
        {{ link.text }}
      </router-link>
      <div class="magnifying-glass">&#128269;</div>
      <input
        @input="searchForArticles"
        @change="hideSearchResults"
        @focus="showSearchResults"
        ref="search"
        type="text"
        placeholder="заглавие на статия..."
        class="search-inp"
      />
    </div>

    <div class="dummy"></div>
    <HamburgerMenu />
  </div>
</template>

<script>
import { allArticles } from "@/assets/articlesHolder.js";
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
      foundArticles: [],
      areSearchResultsHidden: false,
    };
  },
  methods: {
    searchForArticles({ target: { value } }) {
      this.foundArticles = allArticles.filter((article) => {
        const regExp = new RegExp(value, "i");
        if (regExp.test(article.text)) {
          return article;
        }
      });
    },
    selectFoundArticle() {
      this.$refs.search.value = "";
      this.foundArticles = [];
    },
    hideSearchResults({ target: { tagName } }) {
      if (tagName !== "INPUT") {
        this.areSearchResultsHidden = true;
      }
    },
    showSearchResults() {
      this.areSearchResultsHidden = false;
    },
  },
  created() {
    document.addEventListener("click", this.hideSearchResults);
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/_globalVars.sass"
@import "_variables.sass"

$padding-x: 1%
$search-inp-height: 20px

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
    transition: $default-transition
    &:hover
      transform: scale(1.1)
  .options-holder
    display: flex
    .magnifying-glass
      margin: auto 10px auto auto
    .search-inp
      height: $search-inp-height
      margin: auto 0
    .search-holder
      position: relative
      margin: auto 0
      .search-results
        width: 100%
        position: absolute
        top: calc( #{$search-inp-height} + 7px )
        left: 0
        background-color: white
        z-index: 1
        &.hide
          display: none
        button
          width: 100%
          background-color: transparent
          border: 1px solid black
          border-top: none
          cursor: pointer
          &:hover
            background-color: #e4e4e4
    .link
      &.router-link-exact-active
        color: #4064d7
.link
  all: initial
  color: #3a3a3a
  margin: 0 10px
  font-size: 3vw
  cursor: pointer
  transition: $default-transition
  background-color: transparent
  border: none
.dummy
  display: none

@media only screen and (max-width: 767px)
  .link, .logo
    display: none !important
  .dummy
    display: inline
</style>